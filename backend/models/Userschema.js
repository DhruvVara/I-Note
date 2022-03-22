const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,

        //it removes white spaces from both the Ends (If any)
        trim:true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}, {timeStamp:true})

const User = mongoose.model("USERDETAIL" , userSchema);

module.exports = User;