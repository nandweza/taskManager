const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
