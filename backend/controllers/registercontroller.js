const User = require("../models/Userschema");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// create user
const registercontroller = async (req, res) => {

    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    console.log(req.body)

    const { name, email, password } = req.body;
    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({success,error: "email is already exists"});
        }

        const salt = bcrypt.genSaltSync(10);
        const hashpassword = await bcrypt.hash(password, salt);

        // creating user
        user = await User.create({
            name,
            email,
            password: hashpassword
        });
        // const user = new User({name,email,password:hashpassword});
        // await user.save();

        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.json({ success, authtoken });


    } catch (error) {
        console.log(error.message)
        return res.status(500).json("Internal Server error");
    }
}

module.exports = registercontroller;