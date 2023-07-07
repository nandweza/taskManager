const express = require("express");

const app = express();

const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const taskRoute = require("./routes/taskRoutes");
const authRoute = require("./routes/authRoutes");
const homeRoute = require("./routes/home");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.use(session({
    secret: "My little secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/taskManagerDB", {
    useNewUrlParser: true
})
.then(() => console.log("DB Connected Successfully"))
.catch((err) => console.log(err));

//Passport configuration
passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch(err) {
        done(err, null);
    }
});

app.use("/api/task/", taskRoute);
app.use("/api/auth/", authRoute);
app.use("/api/home/", homeRoute);

module.exports = app;
