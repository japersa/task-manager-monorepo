const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const task = new Task({ ...req.body, userId: req.user._id });
        await task.save();
        res.status(201).send({ message: 'Task created successfully', task });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.listTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user._id });
        res.status(200).send({ tasks });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};