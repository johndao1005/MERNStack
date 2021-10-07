require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            userNewUrlParser: true,
        });
        console.log('Connect success')
    } catch (error) {
        console.error("Connect error")
        process.exit(1)
    }
}

module.exports = connectDB