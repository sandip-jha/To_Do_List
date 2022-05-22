const express = require("express");
const app = express();
//Routes Import
const tasks = require('./routes/tasks');


//Mongo DB connection import
const { connectDb } = require('./db/connect');

//Import the variables from .env file.
require("dotenv").config();

//Middlewares
app.use(express.json());
//Routes Setup

app.use('/api/v1/tasks', tasks);



//Setting up the port 
const port = 3000;

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();