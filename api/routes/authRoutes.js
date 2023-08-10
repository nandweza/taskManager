const express = require("express");
const authController = require('../controllers/authController');

const router = express.Router();


//Register Route
router.route("/register")
.post(authController.registerUser);

//Login Route
router.route("/login")
.post(authController.loginUser);

//Reset Password Route
router.route("/reset-password")
.post(authController.resetPassword);

//Update profile
router.route("/update-profile")
.post(authController.updateProfile);

module.exports = router;
