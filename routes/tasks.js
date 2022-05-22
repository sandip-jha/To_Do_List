const express = require("express");
const router = express.Router();

//Importing the contrller file to deal with the view
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require("../controllers/tasks");

//Route without an id
router.route('/').get(getAllTasks).post(createTask);

//Route with an id to access single task
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router