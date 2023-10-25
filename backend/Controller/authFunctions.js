const bcrypt = require("bcrpyt");
const jwt = require("jsonwebtoken");
const Employee = require("../Database/employee");

const employeeSignup = async (req, role, res) => {
    try {
        //Get employee from database with same name if any
        const validateEmployeeName = async (name) => {
            let employee = await Employee.findOne({ name });
            return employee ? false : true;
        };

        //Get employee from database with same email if any
        const validateEmail = async (email) => {
            let employee = Employee.findOne({ email });
            return employee ? false : true;
        }

        // Validate the name
        let nameNotTaken = await validateEmployeeName(req.name);
        if (!nameNotTaken) {
            return res.status(400).json({
                message: `Employee name is already taken.`,
            });
        }

        // Validate the email
        let emailNotRegistered = await validateEmail(req.email);
        if (!emailNotRegistered) {
            return res.status(400).json({
                message: `Email is already registered.`,
            });
        }

        // Hash password using Bcrypt
        const password = await bcrypt.hash(req.password, 12);
        //create new user
        const newEmployee = new Employee ({
            ...req,
            password,
            role
        });

        await newEmployee.save();
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

const employeeLogin = async (req, role, res) => {
    let { name, password } = req;

    // First Check if the user exists in the database
    const employee = await Employee.findOne({ name });
    if (!employee) {
        return res.status(404).json({
            message: "Employee name is not found. Invalid login credentials.",
            success: false,
        });
    }
    // We will check the if the employee is logging in via the route for his departemnt
    if (employee.role !== role) {
        return res.status(403).json({
            message: "Please make sure you are logging in from the right portal.",
            success: false,
        });
    }
    // That means the employee is existing and trying to signin from the right portal
    // Now check if the passwords match
    let isMatch = await bcrypt.compare(password, employee.password);
    if (isMatch) {
        // if the password match, Sign a the token and issue it to the employee.
        let token = jwt.sign(
            {
                role: employee.role,
                name: employee.name,
                password: employee.password,
            },
            process.env.APP_SECRET,
            { expiresIn: "3 Days" }
        );

        let result = {
            name: employee.name,
            role: employee.role,
            email: employee.email,
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
const employeeAuth = (req, res, next) => {
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
    const employee = await Employee.findOne({ name });
    !roles.includes(employee.role)
        ? res.status(401).json("Sorry, you do not have access to this route.")
        : next();
};