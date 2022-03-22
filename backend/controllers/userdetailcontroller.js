const User = require("../models/Userschema");

const userdetailcontroller = async (req, res) => {
    try {
        let userid = req.user.id;
        const user = await User.findById(userid).select("-password")
        res.send(user);
    } catch (err) {
        res.status(500).send("Internal Server error");
    }
}


module.exports = userdetailcontroller;