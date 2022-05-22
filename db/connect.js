const mongoose = require("mongoose");



const connectDb = (url) => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Connected to DB...")
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = { connectDb };