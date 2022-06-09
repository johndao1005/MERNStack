const { Transaction, Token, Product } = require("../models/transaction");
const asyncHandler = require("express-async-handler");

// get product list
const getPackageList = asyncHandler(async (req, res) => {
  try {
    const packages = await Product.find({});

    res.status(201).json({
      packages,
    });
  } catch (e) {
    res.json({ error: e.message });
  }
});

const checkToken = asyncHandler(async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.params.id });
    if (token === null || (token && token.used == true)) {
      throw new Error("The voucher is claimed or not exist");
    } else {
      res.json({
        token: token.token,
      });
    }
  } catch (e) {
    res.json({ error: e.message });
  }
});


const confirmTransaction = asyncHandler(async (req, res) => {

  try {
    const { productID, address, email, phone, receiverName, tokenID } = req.body;
    const token = await Token.findOne({ token: tokenID });
    if (token === null || (token && token.used == true)) {
      throw new Error("The voucher is claimed or not exist")
    }
    await Token.updateOne({ "_id": token._id }, { used: true })
    await Product.updateOne({"id": productID},{$inc : {'quantity' : -1}})
    const newTransaction = await Transaction.create({
      receiverName: receiverName,
      productID: productID,
      tokenID: tokenID,
      address: address,
      email: email,
      phone: phone,
    });
    res.status(201).json({
      message: `Transaction  complete`,
      transaction: newTransaction,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//create 100 unique token
const createToken = asyncHandler(async (req, res) => {
  try {
    //get the current Token List to compare in order to make a new one
    // const currentTokenList = await Token.find({})
    // let i = 0;
    // while (i <100){
    //     //TODO use bcrypt to create a random string

    //     //TODO check if the token is in the list

    //     //generate new token
    //     const newToken = await Token.create({
    //         token: i
    //     })
    // }

    res.status(200).json({
      message: "New token is added",
    });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = {
  getPackageList,
  confirmTransaction,
  checkToken,
  createToken,
};
