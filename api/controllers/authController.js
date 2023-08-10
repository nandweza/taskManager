const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secretKey } = require('./../config/keys');


exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //check if username exists
        const existingUsername = await User.findOne({ username });

        if (existingUsername) {
            res.status(400).json({ message: 'Username already exists!!!' });
        }

        //check if email exists
        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            res.status(400).json({ message: 'Email already exists!!!' });
        }

        //check if password is not < 6 characters
        if (password.length < 6) {
            res.status(400).json({ message: 'Password must be 6 characters long!!!' });
        }

        //generate salt and hash password
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        //save new user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occured!' });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        }

        //check if password is valid
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1hr' });
        
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occured!' });
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: 'User not found!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;

        await user.save();

        res.status(200).json({ message: 'Password reset successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occured!' });
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const { userId } = req.user;
        const { username, email } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found!' });
        }

        user.username = username || user.username;
        user.email = email || user.email;

        await user.save();

        res.status(200).json({ message: 'Profile updated Successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occured' });
    }
}