const router = require('express').Router();
const { 
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
} = require("../controllers/authController");

// Avatar upload middleware
const path = require("path");
const multer = require("multer");
const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
const upload = multer({ dest: uploadsDir });

const dotenv = require("dotenv");
dotenv.config();

const {OAuth2Client, JWT} = require("google-auth-library");

router.get("/", test)
router.post("/signup", registerUser)
router.get("/confirm/:id/:token", confirmEmail)
router.post("/login", loginUser)
router.get("/profile", getProfile)
router.get("/logout", logoutUser)
router.post("/email", sendEmail)
// forgot password
router.post("/forgot", forgotPassword)
// reset password
router.post("/reset/:id/:token", resetPassword)
// User profile
router.post("/profile/update", updateUserAccount)
router.post("/profile/avatar", upload.single('file'), uploadAvatar)
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

module.exports = router, uploadsDir;