const productmodels = require("../models/productmodels");



//getting all products with pagination done.
const getallproducts = async (req, resp) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const mydata = await productmodels.find({}).sort("id").skip((page - 1) * limit).limit(Number(req.query.limit) || 6);
    resp.status(200).json(mydata)
    console.log("DATA IS SENT FROM THE BACKEND");
}

const getProductByComapny = async (req, resp) => {
    const mydata = await productmodels.find(req.query)
    resp.status(200).json(mydata);
    console.log("DATA IS SENT FROM THE BACKEND");
}

const getsortpriceaccending = async (req, resp) => {
    const mydata = await productmodels.find(req.query).sort("price");
    resp.status(200).json(mydata);
    console.log("DATA IS SENT FROM THE BACKEND");
}

const getsortpricedecending = async (req, resp) => {
    const mydata = await productmodels.find(req.query).sort("-price");
    resp.status(200).json(mydata);
    console.log("DATA IS SENT FROM THE BACKEND");
}

const postaddproduct = async (req, resp) => {
    const input = req.body;
    const data = new productmodels(input);
    const result = await data.save();
    console.log("THE DATA IS SAVED");
    resp.status(200).send("DATA IS SAVED IN THE BACKEND");
}


module.exports = { getallproducts, getProductByComapny, getsortpriceaccending, getsortpricedecending, postaddproduct };