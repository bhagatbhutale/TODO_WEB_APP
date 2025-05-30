const mongoose = require("mongoose");

const mongoDB = async (req, res) => {
    try {
        await mongoose.connect(
          "mongodb+srv://bhagatbhutale57:Todo_01%23@cluster0.rlfmwgw.mongodb.net/todoapp"
        );
        console.log("DB Connected..")

    } catch (error) {
        console.log("MongoDB connection is Error Occure !")
    }
}

module.exports =  mongoDB

