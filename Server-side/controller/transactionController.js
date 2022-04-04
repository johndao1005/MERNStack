const { Transaction,Token,Product } = require('../models/transaction');
const asyncHandler = require('express-async-handler');

// get product list
const getPackageList = asyncHandler(async (req, res) => {

    try {
        const ProductList = await Product.find({});

        res.status(201).json({
            ProductList
        })
    } catch {
        res.status(400)
        throw new Error('Server error')
    }
})

const checkToken = asyncHandler(async (req, res) => {

    try {
        await Token.findOne({token:req.params.id})
        .then((token)=>{
            if(token.used == true){
                throw new Error('Token is used')
            }
        })

        res.status(200).json({
            message: "Token is available"
        })
    } catch (error){
        res.status(500).json({
            message : error.message
        })
        console.error(error)
    }
})

const confirmTransaction = asyncHandler(async (req, res) => {
    try {
        await Token.findOne({token:req.params.id})
        .then(async(token) =>{
            if(token.used == true){
                throw new Error('Token is used')
            }
            console.log(token.used)
            const {productID ,address} = req.body
            await Token.updateOne({"_id":token._id},{used:true})
            const newTransaction =await Transaction.create({
                productID,
                tokenID:token.token,
                address
            })
            res.status(201).json({
                message : `Transaction ${newTransaction._id} complete`
            })
        })
    } catch(error) {
        res.status(400).json({message : error.message})
    }
})

//create 100 unique token
const createToken = asyncHandler(async(req,res)=>{
    try{
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
                message : "New token is added"
            })
    }catch(error){
        res.status(400).json({message : error})
    }
})

module.exports = {
    getPackageList,
    confirmTransaction,
    checkToken,
    createToken
}; 
