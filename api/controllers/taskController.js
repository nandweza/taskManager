const Task = require("../models/Task");

exports.createTask = async (req, res) => {
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
}

exports.getAllTasks = async (req, res) => {
    if (req.user) {
        try {
            const tasks = await Task.find().sort({ createdAt: -1 });
            res.status(200).json(tasks); 
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not allowed");
    }
}

exports.getTask = async (req, res) => {
    if (req.user) {
        try {
            const task = await Task.findById(req.params.id);
            res.status(200).json(task);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not allowed");
    }
}

exports.updateTask = async (req, res) => {
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
}

exports.deleteTask = async (req, res) => {
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
}
