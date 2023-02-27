const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const uri = "mongodb+srv://rohan:XxYy123@rohan1.gjfyv9v.mongodb.net/rohan1?retryWrites=true&w=majority";
const password = "XxYy123";
const name = "Cluster0";


const connectDB = () => {
    console.log("THE DATA BASE IS CONNECTED.");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;