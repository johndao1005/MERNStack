const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    receiverName: {
      type: String,
      required: false,
    },
    productID: {
      type: String,
      required: false,
    },
    tokenID: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
  },
  {
    timestamp: true, //this will check when the transaction is created and updated
  }
);

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const tokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    used: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamp: true, //this will check when the transaction is created and updated
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
const Token = mongoose.model("Token", tokenSchema);
const Product = mongoose.model("Product", productSchema);
module.exports = { Transaction, Token, Product };
