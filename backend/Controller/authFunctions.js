const bcrypt = require("bcrpyt");
const jwt = require("jsonwebtoken");
const User = require("../Database/user");

const userSignup = async (req, role, res) => {
    try {
        //Get user from database with same name if any
        const validateUserName = async (name) => {
            let user = await User.findOne({ name });
            return user ? false : true;
        };

        //Get employee from database with same email if any
        const validateEmail = async (email) => {
            let user = await User.findOne({ email });
            return user ? false : true;
        }

        // Validate the name
        let nameNotTaken = await validateUserName(req.body.name);
        if (!nameNotTaken) {
            return res.status(400).json({
                message: `User name is already taken.`,
            });
        }

        // Validate the email
        let emailNotRegistered = await validateEmail(req.body.email);
        if (!emailNotRegistered) {
            return res.status(400).json({
                message: `Email is already registered.`,
            });
        }

        // Hash password using Bcrypt
        const password = await bcrypt.hash(req.body.password, 12);
        //create new user
        const newUser = new User ({
            ...req,
            password,
            role
        });

        await newUser.save();

        return res.status(201).json({
            message: "Hurry! You are successfully registered. Please Login."
        });
    } catch (err) {
        // Implement logger function if any
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const userLogin = async (req, role, res) => {
    let { name, password } = req;

    // First Check if the user exists in the database
    const user = await User.findOne({ name });
    if (!user) {
        return res.status(404).json({
            message: "User name is not found. Invalid login credentials.",
            success: false,
        });
    }
    // We will check the if the employee is logging in via the route for his departemnt
    if (user.role !== role) {
        return res.status(403).json({
            message: "Please make sure you are logging in from the right portal.",
            success: false,
        });
    }
    // That means the employee is existing and trying to signin from the right portal
    // Now check if the passwords match
    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        // if the password match, Sign a the token and issue it to the employee.
        let token = jwt.sign(
            {
                role: user.role,
                name: user.name,
                password: user.password,
            },
            process.env.APP_SECRET,
            { expiresIn: "3 Days" }
        );

        let result = {
            name: user.name,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168,
        };

        return res.status(200).json({
            ...result,
            message: "You are now Logged in.",
        });

    } else {
        return res.status(403).json({
            message: "Incorrect Password."
        });
    }
};

// Verify JWT from authorization header Middleware
const userAuth = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log(process.env.APP_SECRET);

    if (!authHeader) return res.sendStatus(403);
    console.log(authHeader); //Bearer token

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
        console.log("verifying");
        if (err) return res.sendStatus(403); //invalid token

        console.log(decoded);
        next();
    });
}

// Check role middleware
const checkRole = (roles) => async (req, res, next) => {
    let { name } = req.body;
    
    // Retrieve employee info from DB
    const user = await User.findOne({ name });
    !roles.includes(user.role)
        ? res.status(401).json("Sorry, you do not have access to this route.")
        : next();
};