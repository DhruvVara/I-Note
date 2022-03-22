const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config({path:"./.env"});

//connecting to database    
require("./db/connection"); 
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001 ;



//load all router
app.use("/api/auth", require("./router/auth"));
app.use("/api/note", require("./router/notes"));


app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
})