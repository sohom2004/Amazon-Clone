const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Address");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    carts: Array
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    }

    next();
})

userSchema.methods.getAuthToken = async function () {
    try {
        let token = jwt.sign({ __id: this.__id}, secretKey );
        this.tokens = [{ token: token }];
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

userSchema.methods.addCartData = async function (cart){
    try {
        this.cart = this.cart.concat(cart)
        await this.save();
        return this.carts;
    } catch (error) {
        console.log(error);
    }
}


const USER = new mongoose.model("USER", userSchema);

module.exports = USER;