const jwt = require("jsonwebtoken");

const fetchdata = (req, res, next) =>  {

    //get the jwt token from th user and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using valid token" });
    }

    try {
        const data = jwt.verify(token,process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using valid token" });
    }
}

module.exports = fetchdata;