const express = require("express");
const app = express();
const mongoDB = require("./connection/connection")

app.get("/", (req, res) => {
    res.send("this is a Home Page");
})

mongoDB();
app.listen(2001, () => {
    
    console.log("Server is Started on Port 2001.....")
})