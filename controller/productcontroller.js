const productmodels = require("../models/productmodels");


const getallproducts = async (req, resp) => {
    const mydata = await productmodels.find({});
    resp.status(200).json(mydata)
}

const getProductByComapny = async (req, resp) => {
    const mydata = await productmodels.find(req.query)
    resp.status(200).json(mydata);
}

const getsortpriceaccending = async (req, resp) => {
    const mydata = await productmodels.find(req.query).sort("price");
    resp.status(200).json(mydata);
}

const getsortpricedecending = async (req, resp) => {
    const mydata = await productmodels.find(req.query).sort("-price");
    resp.status(200).json(mydata);
}

module.exports = { getallproducts, getProductByComapny, getsortpriceaccending, getsortpricedecending };