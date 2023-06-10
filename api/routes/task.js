const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", (req, res) => {
    res.send("Hello, World!!!!");
});

module.exports = router;
