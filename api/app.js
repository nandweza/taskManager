const express = require("express");

const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const taskRoute = require("./routes/task");
const authRoute = require("./routes/auth");

const port = 8000 || process.env.PORT;
dotenv.config();

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

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
