const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretKey } = require("./../config/keys");

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