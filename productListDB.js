// THE ROLE OF THIS FILE IS TO ADD ITEMS IN THE MONGODB SERVER OR ADD ITEMS IN THE DATABASE



const connectDB = require("./database/connectdatabase");
const productmodel = require("./models/productmodels");
const uri = "mongodb+srv://rohan:XxYy123@rohan1.gjfyv9v.mongodb.net/rohan1?retryWrites=true&w=majority";
const productlistjson = require("./productdata.json");

const start = async () => {
    try {
        await connectDB(uri);
        await productmodel.deleteMany();
        await productmodel.create(productlistjson);
        console.log("DATA IS UPDATED SUCCESSFULLY.");
    }
    catch (error) {
        console.log(error);
    }
}

start();