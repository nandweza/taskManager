const express = require("express");
// const passport = require('passport');
const taskController = require('../controllers/taskController');
const authorizationMiddleware = require('./../middleware/authorizationMiddleware');

const router = express.Router();


//task routes
router.route("/")
.post(taskController.createTask)
.get(taskController.getAllTasks,
    authorizationMiddleware.checkTaskOwnership);

router.route("/:id")
.get(taskController.getTask)
.put(taskController.updateTask)
.delete(taskController.deleteTask);

module.exports = router;
