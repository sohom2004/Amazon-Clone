const mongoose = require("mongoose");
const db = "mongodb+srv://sohom2004:"  + process.env.MONGO_PASSWORD + "@cluster1.byifcjg.mongodb.net/Amazon-clone?retryWrites=true&w=majority";

mongoose.connect(db).then(()=>console.log("database has been connected")).catch((error)=>console.log("error" + error.message));