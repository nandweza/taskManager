const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");


//Register Routes
router.route("/register")
.get((req, res) => {
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

//Login Routes
router.route("/login")
.get((req, res) => {
    res.send("Got Login Page successfully");
})

.post((req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect("/login");
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            if (req.session.redirectTo) {
                const redirectTo = req.session.redirectTo;
                delete req.session.redirectTo;
                return res.redirect(redirectTo);
            }
            // return res.redirect("/");
            return res.send("Successfully Logged In...")
        });
    })(req, res, next);
});

//Logout user
router.route("/logout")
.get((req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
    });
    res.redirect("/login");
});

module.exports = router;
