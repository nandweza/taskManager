const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const User = require("../models/User");


//task routes
router.route("/")
.post(async (req, res) => {
    if (req.user) {
        const newTask = new Task(req.body);

        try {
            const savedTask = await newTask.save();
            res.status(201).json(savedTask);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
})

.get(async (req, res) => {
    if (req.user) {
        try {
            const tasks = await Task.find().sort({ createdAt: -1 });
            res.status(201).json(tasks); 
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not allowed");
    }
});

router.route("/:id")
.put(async (req, res) => {
    if (req.user) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(201).json(updatedTask);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json(" User not allowed");
    }
})

.delete(async (req, res) => {
    if (req.user) {
        try {
            await Task.findByIdAndDelete(req.params.id);
            res.status(201).json("Task deleted successfully!!!");
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("User not allowed");
    }
})

module.exports = router;

