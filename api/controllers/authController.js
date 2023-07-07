const User = require("../models/User");

const passport = require("passport");

exports.registerUser = (req, res) => {
    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        if(err) {
            res.status(500).send(err);
        } else {
            passport.authenticate("local")(req, res, () => {
                res.send("Successfully registered User!!!");
            });
        }
    });
}

exports.loginUser = (req, res, next) => {
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
}

exports.logoutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
    });
    res.redirect("/login");
}
