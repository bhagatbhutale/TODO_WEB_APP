const express = require("express");
const app = express();
const mongoDB = require("./connection/connection")
const auth = require("./routes/auth")
const list = require("./routes/list")
app.use(express.json());

app.get("/", (req, res) => {
    res.send("this is a Home Page");
})

app.use("/api/v1", auth);
app.use("/api/v2", list);

mongoDB();
app.listen(2001, () => {
    
    console.log("Server is Started on Port 2001.....")
})