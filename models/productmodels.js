const mongoose = require("mongoose");
const { object } = require("webidl-conversions");


const productschema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "YOU MUST PROVIDE THE ID OF THE PRODUCT."]
    },
    name: {
        type: String,
        required: [true, "YOU MUST PROVIDE THE NAME OF THE PRODUCT."]
    },
    price: {
        type: Number,
        required: [true, "YOU MUST PROVIDE THE PRICE OF THE PRODUCT."]
    },
    image: {
        type: String,
        required: [true, "YOU MUST PROVIDE THE IMAGE OF THE PRODUCT."]
    },
    info: {
        type: String,
        required: [true, "YOU MUST PROVIDE THE INFO OF THE PRODUCT."]
    },
    stars: {
        type: Number,
        required: [true, "YOU MUST PROVIDE THE STARS OF THE PRODUCT."]
    },
    avaiable: {
        type: Boolean,
        required: [true, "YOU MUST PROVIDE THE AVAIABLE OF THE PRODUCT."]
    },
    company: {
        type: String,
        required: [true, "YOU MUST PROVIDE THE COMPANY OF THE PRODUCT."]
    },
    cateogory: {
        type: String,
        required: [true, "YOU MUST PROVIDE THE CATEOGORY OF THE PRODUCT."]
    }
});

const productmodel = mongoose.model("product", productschema);

module.exports = productmodel;