const express = require("express");
const authController = require('../controllers/authController');

const router = express.Router();


//Register Route
router.route("/register")
.post(authController.registerUser);

//Login Route
router.route("/login")
.post(authController.loginUser);

//Logout route
router.route("/logout")
.get(authController.logoutUser);

module.exports = router;
