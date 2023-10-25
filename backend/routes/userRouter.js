const router = require('express').Router();
const {
  employeeAuth,
  employeeLogin,
  employeeSignup,
  jwtauth,
  checkRole
} = require("../Controller/authFunctions");

// User Registration Route
router.post("/register-user", (req, res) => {
  employeeSignup(req.body, "user", res);
});

// User Login Route
router.post("/login-user", async (req, res) => {
  await employeeLogin(req.body, "user", res);
});

// Protected route accessible to User/Member subscription level
router.get("/user-protected", employeeAuth, async (req, res) => {
  if (req.user.subscriptionLevel === "user") {
    return res.json(`Welcome, User ${req.user.email}`);
  } else {
    return res.status(403).json("Access denied.");
  }
});

// Admin Registration Route
router.post("/register-admin", (req, res) => {
  employeeSignup(req.body, "admin", res);
});

// Admin Login Route
router.post("/login-admin", async (req, res) => {
  await employeeLogin(req.body, "admin", res);
});

// Protected route accessible to Admin subscription level
router.get("/admin-protected", employeeAuth, checkRole(["admin"]), async (req, res) => {
  return res.json(`Welcome, Admin ${req.user.email}`);
});

// Enterprise User Registration Route
router.post("/register-enterprise", (req, res) => {
  employeeSignup(req.body, "enterprise", res);
});

// Enterprise User Login Route
router.post("/login-enterprise", async (req, res) => {
  await employeeLogin(req.body, "enterprise", res);
});

// Protected route accessible to Enterprise User subscription level
router.get("/enterprise-protected", employeeAuth, async (req, res) => {
  if (req.user.subscriptionLevel === "enterprise") {
    return res.json(`Welcome, Enterprise User ${req.user.email}`);
  } else {
    return res.status(403).json("Access denied.");
  }
});

// Premium User Registration Route
router.post("/register-premium", (req, res) => {
  employeeSignup(req.body, "premium", res);
});

// Premium User Login Route
router.post("/login-premium", async (req, res) => {
  await employeeLogin(req.body, "premium", res);
});

// Protected route accessible to Premium User subscription level
router.get("/premium-protected", employeeAuth, async (req, res) => {
  if (req.user.subscriptionLevel === "premium") {
    return res.json(`Welcome, Premium User ${req.user.email}`);
  } else {
    return res.status(403).json("Access denied.");
  }
});

// Common protected route accessible to all authenticated users
router.get("/protected", jwtauth, (req, res) => {
  return res.send("Here's the info you requested");
});

module.exports = router;