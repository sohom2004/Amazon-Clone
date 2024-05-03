const express = require("express");
const router = new express.Router();
const Product = require("../models/productSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

var token;

//get products data api
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Product.find();
        //console.log(productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error: " + error.message);
    }
})

//get individual products
router.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const individualData = await Product.findOne({ id });
        res.status(201).json(individualData);
    } catch (error) {
        console.log("error: " + error.message);
    }
})


//user register
router.post("/register", async (req, res) => {

    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        res.status(422).json({ error: "All fields are required to be filled." });
        console.log("no data available");
    }

    try {
        const preuser = await USER.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This user is already present." });
        } else if (password !== confirmPassword) {
            res.status(422).json({ error: "Passwords donot match" });
        } else {
            const finalUser = new USER({
                name, email, password, confirmPassword
            });

            const storedData = await finalUser.save();
            console.log(finalUser);

            res.status(201).json(storedData);
        }
    } catch (error) {
        res.status(400).json({ error: "invalid details" });
    }
})

// user login
router.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Please enter all data" });
    }

    try {

        const userlogin = await USER.findOne({ email: email });
        console.log(userlogin);
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch);

            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            } else {

                token = await userlogin.getAuthToken();
                req.token = token;

                res.cookie("eccomerce", token, {
                    expires: new Date(Date.now() + 2589000),
                    httpOnly: true
                });
                res.status(201).json({ userlogin, token });
                //res.status(201).json(userlogin);
            }

        } else {
            res.status(400).json({ error: "user does not exist" });
        }

    } catch (error) {
        res.status(400).json({ error: "invalid crediential pass" });
        console.log("error: " + error.message);
    }
});


//get cart item
router.post("/addcart/:id", async (req, res) => {
    try {
        const token = req.body.tokendata;
        console.log(token);

        const verifyToken = jwt.verify(token, secretKey);
        console.log(verifyToken);

        const rootUser = await USER.findOne({ _id: verifyToken._id, "tokens.token": token });
        console.log(rootUser);

        if (!rootUser) {
            throw new Error("No User Found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        const { id } = req.params;
        const cart = await Product.findOne({ id: id });
        console.log(cart + "cart item");

        const userData = await USER.findOne({ _id: req.userID });
        console.log(userData);

        if (userData) {
            const cartData = await userData.addCartData(cart);
            await userData.save();
            console.log(cartData);
            res.status(201).json(userData);
        } else {
            res.status(401).json({ error: "invalid user" });
        }
    } catch (error) {
        res.status(401).json({ error: "invalid user" });
        console.log("error: " + error);
    }
})

module.exports = router;