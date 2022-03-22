const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"USERDETAIL"
    },
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const noteDetails = mongoose.model("Note" , noteSchema);

module.exports = noteDetails;