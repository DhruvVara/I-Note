const mongoose = require("mongoose");

const Contactschema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        //it removes white spaces from both the Ends (If any)
        trim:true
    },
    email:{
        type: String,
        required:true,
        lowercase:true,
        trim:true
    },
    description:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const contactus = mongoose.model("Contact" , Contactschema);

module.exports = contactus;