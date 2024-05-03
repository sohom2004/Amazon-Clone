const Product = require("./models/productSchema");
const productData = require("./constant/productData");

const DefaultData = async()=>{
    try {
        await Product.deleteMany({});

        const storeData = await Product.insertMany(productData);
        //console.log("default data consoled: " + storeData);
    } catch (error) {
        console.log("error: " + error.message);
    }
};

module.exports = DefaultData;