const Task = require('./../models/Task');

exports.checkTaskOwnership = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json('Task not found');
        }
        if (!task.user.equals(req.user._id)) {
            return res.status(403).json('Unauthorized');
        }
        next();
    } catch (error) {
        return res.status(500).json(error);
    }
};
