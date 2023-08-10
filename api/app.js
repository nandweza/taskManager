const express = require("express");

const app = express();

const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/User");
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { secretKey } = require('./config/keys');
const taskRoute = require("./routes/taskRoutes");
const authRoute = require("./routes/authRoutes");
const profileRoute = require("./routes/profileRoutes");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

mongoose.connect("mongodb://localhost:27017/taskManagerDB", {
    useNewUrlParser: true
})
.then(() => console.log("DB Connected Successfully"))
.catch((err) => console.log(err));


//Passport configuration
app.use(passport.initialize());

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey,
};

passport.use(
    new JwtStrategy(jwtOptions, async (payload, done) => {
      try {
        const user = await User.findById(payload.id);
  
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error, false);
      }
    })
);

app.use("/api/auth/", authRoute);

app.use("/api/profile/", profileRoute);
app.use("/api/task/", taskRoute);

// 404 route
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});
  
// Error handler
app.use((err, req, res, next) => {
    console.error(err);
  
    if (!res.headersSent) {
        res.status(500).json({ message: 'An error occurred' });
    }
});

module.exports = app;
