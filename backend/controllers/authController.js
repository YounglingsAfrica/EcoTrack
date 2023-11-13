const User = require("../models/user")
const bcrypt = require("bcryptjs");
const { hashPassword, comparePassword } = require("../helpers/auth")
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require('path');
const uploadsDir = require("../routes/userRouter");

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
        user: "ecotracksolutions@gmail.com",
        pass: process.env.APP_PASSWORD
    }
});

const test = (req, res) => {
    res.json("test is working")
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if name entered
        if (!name) {
            return res.json({
                error: "Name is required"
            })
        };
        // check if password is okay
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and should be at least 6 characters long"
            })
        };
        // check if email okay
        const exist = await User.findOne({email})
        if (exist) {
            return res.json({
                error: "Email is already taken"
            })
        }

        const hashedPassword = await hashPassword(password)

        // create user in db
        let user = await User.create({
            name, 
            email, 
            password: hashedPassword,
            isConfirmed: false
        })

        // email confirmation 
        const confirmationToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });

        user = await User.findByIdAndUpdate(user._id, { confirmationToken }, { new: true })

        const confirmationUrl = `${process.env.PROD_URL}/confirm/${user._id}/${confirmationToken}`;
        const emailTemplate = `
        <p>Dear ${user.name},</p>
        
        <p>Thank you for signing up for our website. Please confirm your email by clicking the link below:</p>
    
        <a href="${confirmationUrl}">Confirm Email</a>
        `;

        transporter.sendMail({
            from: "ecotracksolutions@gmail.com",
            to: email,
            subject: "Confirm your email",
            html: emailTemplate,
        }, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
                return res.status(500).json({ error: 'Error sending confirmation email' });
            } else {
                console.log(`Email sent: ${info.response}`);
                res.status(200).json({ 
                    message: "Registration successful. Please check your email for confirmation.", 
                    user 
                });
            }
        });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
}

const confirmEmail = async (req, res) => {
    const { token } = req.params;
    
    try {
        // look up the user by their confirmation token
        const user = await User.findOne({ confirmationToken: token });
    
        if (!user) {
            return res.status(404).json({ message: 'No user found with that confirmation token' });
        }

        // confirm the user's email and clear the confirmation token
        user.isConfirmed = true;
        user.confirmationToken = null;
        await user.save();
    
        return res.status(200).send('Email confirmed.');
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error confirming email' });
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // check if user exists
        const user = await User.findOne({email});
        if (!user) {
            return res.json({
                error: "User not found"
            })
        }

        // check if email confirmed
        if (!user.isConfirmed) {
            return res.json({
                error: "Please confirm your email before logging in"
            });
        }

        // check if passwords match
        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign(
                {email: user.email, id: user._id, name: user.name}, 
                process.env.JWT_SECRET, 
                {expiresIn: "1h"}, 
                (err, token) => {
                    if (err) throw err;
                    res.cookie("authToken", token, { sameSite: "None", secure: true }).json(user)
                }
            )  
        } 
        if (!match) {
            res.json({
                error: "Incorrect password"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const token = req.cookies.authToken;

    if (!token) return res.status(401).json({ message: "No token provided"});

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // console.log('User from JWT:', user);
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({ message: "Token expired" })
            }
            console.error("JWT verification error", err);
            return res.status(403).json({ message: "Token verification failed" })
        }

        User.findById(user.id)
            .then(user => {
                // console.log("User from DB: ", user);
                res.json(user)
            })   
            .catch(err => res.status(500).json("Error: " + err));
    });
};

const forgotPassword = async (req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email: email});
        if (!user) {
            return res.send({
                Status: "User does not exist"
            })
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})

        const mailOptions = {
            from: "ecotracksolutions@gmail.com",
            to: email,
            subject: "Reset Password",
            text: `Please follow this link to reset your password: ${process.env.PROD_URL}/reset/${user._id}/${token}`
        };
  
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send({ Status: "Error sending email" });
            } else {
                console.log("Email sent: ", info.response);
                return res.send({Status: "Success"});
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ Status: "Error finding user" });
    }
};

const resetPassword = (req, res) => {
    const {id, token} = req.params;
    const {password} = req.body;
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({
            Status: "Error with token"
            });
        } else {
            if (!password || password.length < 6) {
                return res.json({
                    error: "Password is required and should be at least 6 characters long"
                })
            }
            bcrypt.hash(password, 12)
            .then(hash => {
            User.findByIdAndUpdate({_id: id}, {password: hash})
            .then(u => res.send({
                Status: "Success"
            }))
            .catch(err => res.send({
                Status: err
            }))
            })
            .catch(err => res.send({Status: err}))
        }
    })
};

const logoutUser = (req, res) => {
    const {name} = req.body;
    res.clearCookie("token", name);
    return res.json({
        message: "Logged out successfully"
    });
}

const sendEmail = (req, res) => {
    try {
        const { name, email, message } = req.body;

        transporter.sendMail({
            from: "ecotracksolutions@gmail.com",
            to: "ecotracksolutions@gmail.com",
            subject: "Message from Visitor",
            text:`Hello,

            You have received a message from ${name} (${email}).
    
            Message:
            ${message}
    
            Regards,
            ${name}`,
            html: `<p>Hello,</p>
    
            <p>You have received a message from <strong>${name}</strong> (${email}).</p>
    
            <p>Message:<br>
            ${message}</p>
    
            <p>Regards,<br>
            ${name}</p>`

        }, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
                return res.status(500).json({ error: 'Error sending email' });
            } else {
                console.log(`Email sent: ${info.response}`);
                res.status(200).json({ 
                    message: "Email Submitted! We'll get right back to you very soon.",  
                });
            }
        });
    } catch(error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
    }
}

const updateUserAccount = (req, res) => {
    const token = req.cookies.authToken;
    const { name, email, password, phoneNumber } = req.body;
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error("Error verifying token:", err);
            console.error("Token:", token);
            return res.json({
                Status: "Error with token"
            });
        } else {
            User.findById(decoded.id)
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }

                const update = {};
                if (name && name !== user.name) update.name = name;
                if (password && password.length >= 6) {
                    const isEqual = bcrypt.compareSync(password, user.password);
                    if(!isEqual){
                        update.password = bcrypt.hashSync(password, 12);
                    }
                }
                if (email && email !== user.email) update.email = email;
                if (phoneNumber && phoneNumber !== user.phoneNumber) update.phoneNumber = phoneNumber;

                if (Object.keys(update).length > 0) {
                    User.findByIdAndUpdate(user._id, update, { new: true })
                    .then(updatedUser => res.json(updatedUser))
                    .catch(err => res.status(500).json({ message: 'Server Error', err }));
                } else {
                    return res.status(400).json({ message: 'No changes detected' });
                }
            })
            .catch(err => {
                console.error(err.message);
                res.status(500).json({
                    message: "Server Error", err: err.message
                });
            })
        }
    });
};

const uploadAvatar = (req, res) => {
    console.log(uploadsDir); 
    const token = req.cookies.authToken;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        console.log(uploadsDir); 
        if (err) {
            console.error("Error verifying token:", err);
            console.error("Token:", token);
            return res.status(500).json({ message: 'Error with token' });
        } else {
            const userId = decoded.id;
            const file = req.file;

            const avatar = {
                data: fs.readFileSync(path.join(uploadsDir, file.filename)).toString('base64'),
                contentType: file.mimetype 
            };

            User.findByIdAndUpdate(userId, { avatar }, { new: true })
            .then(user => {
                res.json({ message: 'Avatar updated!', avatar: user.avatar });
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: 'Server Error' });
            });
        }
    });
};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    forgotPassword,
    resetPassword,
    logoutUser,
    confirmEmail,
    sendEmail,
    updateUserAccount,
    uploadAvatar
}