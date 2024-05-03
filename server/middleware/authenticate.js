const jwt = require("jsonwebtoken");
//const { getTokenFromLocalStorage } = require("./localStorageFunctions");
const USER = require("../models/userSchema");
const secretKey = process.env.KEY;

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers['token'];
        //const token = getTokenFromLocalStorage();
        if (!token) {
            throw new Error("No token found in local storage");
        }
        const verifyToken = jwt.verify(token, secretKey);
        console.log(verifyToken);

        const rootUser = await USER.findOne({_id: verifyToken._id, "tokens.token": token});
        console.log(rootUser);

        if(!rootUser){
            throw new Error("No User Found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (error) {
        console.log("error: " + error);
    }
}

module.exports = authenticate;