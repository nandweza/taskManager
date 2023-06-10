const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");


//Register Routes
router.route("/register")
.get((re, res) => {
    res.send("Got the Register page!!!");
})

.post((req, res) => {
    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        if(err) {
            res.status(500).send(err);
        } else {
            passport.authenticate("local")(req, res, () => {
                res.send("Successfully registered User!!!");
            });
        }
    });
});

module.exports = router;
