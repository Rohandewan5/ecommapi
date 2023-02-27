const express = require("express");
const router = express.Router();

const { getallproducts, getProductByComapny, getsortpriceaccending, getsortpricedecending } = require("../controller/productcontroller");

//to get all products.
router.route("/product").get(getallproducts);

//to get products by company name.
router.route("/productbycompany").get(getProductByComapny);

//to get product by acending order.
router.route("/productaccending").get(getsortpriceaccending);

//to get product by decending order.
router.route("/productdecending").get(getsortpricedecending);

module.exports = router;