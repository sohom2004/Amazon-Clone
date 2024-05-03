require("dotenv").config();
const express = require("express");
const app = express();
const cookie = require("cookie-parser");
const mongoose = require("mongoose");
require("./DB/conn");
const bodyParser = require('body-parser');

const Product = require("./models/productSchema");
const DefaultData = require("./defaultData");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(bodyParser.json());
app.use(cookie(""));
app.use(cors());
app.use(router);

const port = 3005;

app.listen(port, ()=>{
    console.log(`server running on port ${port}.`);
})

DefaultData();