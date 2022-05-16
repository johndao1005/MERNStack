require('dotenv').config();
const connectDB = require("../config/db")
const {User} = require("../models/user")
const {Token,Product} = require("../models/transaction")
const userData = require("../data/usersData")
const tokenData = require("../data/tokenData")
const productData = require("../data/productsData")

connectDB();

const importData = async() => {
    
    try {
        await User.deleteMany({})
        await User.insertMany(userData)
        await Token.deleteMany({})
        await Token.insertMany(tokenData)
        await Product.deleteMany({})
        await Product.insertMany(productData)
        console.log('Import success')
        process.exit(0)

    } catch (e) {
        console.error(`Error with user import ${e}`)
        process.exit(1)
    }
}

importData()
