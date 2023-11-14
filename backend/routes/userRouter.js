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
const multer = require("multer");

// Avatar upload middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './backend/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const uploadMiddleware = multer({ storage: storage })

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
router.post("/profile/avatar", uploadMiddleware.single('avatar'), uploadAvatar)
// google auth


module.exports = router;