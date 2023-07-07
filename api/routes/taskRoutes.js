const express = require("express");
const taskController = require('../controllers/taskController');

const router = express.Router();


//task routes
router.route("/")
.post(taskController.createTask)
.get(taskController.getAllTasks);

router.route("/:id")
.get(taskController.getTask)
.put(taskController.updateTask)
.delete(taskController.deleteTask);

module.exports = router;
