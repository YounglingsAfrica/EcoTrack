const router = require('express').Router();
const cors = require("cors");
const { 
  test, 
  registerUser, 
  loginUser, 
  getProfile,
  forgotPassword,
  resetPassword 
} = require("../controllers/authController");
const dotenv = require("dotenv");
dotenv.config();

const {OAuth2Client, JWT} = require("google-auth-library");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
)

router.get("/", test)
router.post("/signup", registerUser)
router.post("/login", loginUser)
router.get("/profile", getProfile)

// forgot password
router.post("/forgot", forgotPassword)

// reset password
router.post("/reset/:id/:token", resetPassword)

// google auth
// router.post('/login', async (req, res, next) => {

//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Referrer-Policy", "no-referrer-when-downgrade");

//   const redirectUrl = "http://127.0.0.1:3000/oauth";

//   const oAuth2Client = new OAuth2Client(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     redirectUrl
//   );

//   const authorizeUrl = oAuth2Client.generateAuthUrl ({
//     access_type: "offline",
//     scope: "https://www.googleapis.com/auth/userinfo.profile openid",
//     prompt: "consent"
//   });

//   res.json({
//     url: authorizeUrl
//   });

// });

module.exports = router;


















// const {
//   userAuth,
//   userLogin,
//   userSignup,
//   jwtauth,
//   checkRole
// } = require("../Controller/authFunctions");

// // User Registration Route
// router.post("/signup", (req, res) => {
//   userSignup(req.body, "user", res);
// });

// // User Login Route
// router.post("/login-user", async (req, res) => {
//   await userLogin(req.body, "user", res);
// });

// // Protected route accessible to User/Member subscription level
// router.get("/user-protected", userAuth, async (req, res) => {
//   if (req.user.role === "user") {
//     return res.json(`Welcome, User ${req.user.email}`);
//   } else {
//     return res.status(403).json("Access denied.");
//   }
// });

// // Admin Registration Route
// router.post("/register-admin", (req, res) => {
//   userSignup(req.body, "admin", res);
// });

// // Admin Login Route
// router.post("/login-admin", async (req, res) => {
//   await userLogin(req.body, "admin", res);
// });

// // Protected route accessible to Admin subscription level
// router.get("/admin-protected", userAuth, checkRole(["admin"]), async (req, res) => {
//   return res.json(`Welcome, Admin ${req.user.email}`);
// });

// // Enterprise User Registration Route
// router.post("/register-enterprise", (req, res) => {
//   userSignup(req.body, "enterprise", res);
// });

// // Enterprise User Login Route
// router.post("/login-enterprise", async (req, res) => {
//   await userLogin(req.body, "enterprise", res);
// });

// // Protected route accessible to Enterprise User subscription level
// router.get("/enterprise-protected", userAuth, async (req, res) => {
//   if (req.user.role === "enterprise") {
//     return res.json(`Welcome, Enterprise User ${req.user.email}`);
//   } else {
//     return res.status(403).json("Access denied.");
//   }
// });

// // Premium User Registration Route
// router.post("/register-premium", (req, res) => {
//   userSignup(req.body, "premium", res);
// });

// // Premium User Login Route
// router.post("/login-premium", async (req, res) => {
//   await userLogin(req.body, "premium", res);
// });

// // Protected route accessible to Premium User subscription level
// router.get("/premium-protected", userAuth, async (req, res) => {
//   if (req.user.role === "premium") {
//     return res.json(`Welcome, Premium User ${req.user.email}`);
//   } else {
//     return res.status(403).json("Access denied.");
//   }
// });

// // Common protected route accessible to all authenticated users
// router.get("/protected", jwtauth, (req, res) => {
//   return res.send("Here's the info you requested");
// });

module.exports = router;