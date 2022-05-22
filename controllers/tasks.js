//Import the Mongoose model
const Task = require('../models/Tasks');

const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json(error);
    }
}

const createTask = async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).send({ task });
    } catch (error) {
        //res.json({ error })
        res.status(500).json(error);
    }
}

const getTask = async(req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).send(`Task with id: ${taskId} not found `);
        } else {
            res.status(200).json(task);
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteTask = async(req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskId });
        if (!task) {
            return res.status(404).send(`Task with id : ${taskId} not found`);
        } else {
            return res.status(200).json(task);
        }

    } catch (error) {
        res.status(500).json(error);
    }
}


const updateTask = async(req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).send(`Task with id ${taskId} not found`);
        } else {
            res.status(200).json({ task });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}