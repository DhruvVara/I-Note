const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

//middleware
const fetchdata = require("../middleware/fetchdata");

//loading controllers
const registercontroller = require("../controllers/registercontroller");
const logincontroller = require("../controllers/logincontroller");
const userdetailcontroller = require("../controllers/userdetailcontroller");


// for register
router.post("/register", [
    body('name', "min length must be 1").isLength({ min: 1 }),
    body('email', "Invalid Email").isEmail(),
    body('password', "min length must be 6").isLength({ min: 6 })
], registercontroller);

//for login or authentication
router.post("/login", [
    body('email', "Invalid Email").isEmail(),
    body('password', "Fill the password").exists()
], logincontroller);

// Get details of loggedin user
router.post("/getuserdata", fetchdata, userdetailcontroller);


module.exports = router;