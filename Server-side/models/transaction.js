const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    productID:{
        type: String,
        required: true,
    },
    tokenID: {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true
    }
}, {
    timestamp: true,//this will check when the transaction is created and updated
});

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const tokenSchema = new Schema({
    token : {
        type: String,
        required: true,
    },
    used: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamp: true,//this will check when the transaction is created and updated
});

const Transaction = mongoose.model("Transaction", transactionSchema);
const Token= mongoose.model("Token", tokenSchema);
const Product= mongoose.model("Product", productSchema);
module.exports = { Transaction,Token,Product }