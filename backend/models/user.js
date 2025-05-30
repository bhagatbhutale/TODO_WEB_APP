const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
    },

    username : {
        type :String,
    },

    password : {
        type : String,
        required : true,
    },
    list : [{
        type : mongoose.Types.ObjectId,
        ref : "List"
    }]
})