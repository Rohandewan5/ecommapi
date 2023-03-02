const express = require("express");
const router = express.Router();

const { getallproducts, getProductByComapny, getsortpriceaccending, getsortpricedecending, postaddproduct } = require("../controller/productcontroller");

//to get all products. with pagination.
router.route("/product").get(getallproducts);


//to get products by company name.
router.route("/productbycompany").get(getProductByComapny);

//to get product by acending order.
router.route("/productaccending").get(getsortpriceaccending);

//to get product by decending order.
router.route("/productdecending").get(getsortpricedecending);


//to post the product into the database.
router.route("/addproduct").post(postaddproduct)



module.exports = router;