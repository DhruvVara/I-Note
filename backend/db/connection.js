const mongoose = require("mongoose");

const db = process.env.DATABASE;

mongoose.connect(db).then(()=>{
    console.log("Connnected Succesfully");
}).catch((err)=>{
    console.log("Not Connected");
})