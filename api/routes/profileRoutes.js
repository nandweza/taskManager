const express = require("express");
const passport = require("passport");
const profileController = require("../controllers/profileController");

const router = express.Router();

const requireAuth = passport.authenticate('jwt', { session: false });

router.route("/update-profile")
.patch(requireAuth, profileController.updateProfile);

module.exports = router;
