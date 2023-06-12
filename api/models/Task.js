const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: String,
        content: Array
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
