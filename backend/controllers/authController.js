const User = require("../models/user")
const bcrypt = require("bcrypt");
const { hashPassword, comparePassword } = require("../helpers/auth")
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        return res.json(user);
    } catch (error) {
        console.log(error)
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

        // check if passwords match
        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, 
                process.env.JWT_SECRET, 
                {}, 
                (err, token) => {
                    if (err) throw err;
                    res.cookie("token", token)
                    res.json(user)
            })  
        } 
        if (!match) {
            res.json({
                error: "Passwords do not match"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

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
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: true,
            auth: {
                user: "ecotracksolutions@gmail.com",
                pass: process.env.APP_PASSWORD
            }
        });

        const mailOptions = {
            from: "ecotracksolutions@gmail.com",
            to: email,
            subject: "Reset Password",
            text: `http://localhost:3000/reset/${user._id}/${token}`
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

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    forgotPassword,
    resetPassword
}