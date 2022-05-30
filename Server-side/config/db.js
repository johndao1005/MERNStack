require('dotenv').config()
const mongoose = require('mongoose');
//Show the connection state with database connection

const connectDB = async(mongoURI=process.env.MONGO_URI) => {
    console.log(process.env.MONGO_URI)
    try {
        mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection Successful")
    } catch (e) {
        console.error("MongoDB connection Failure")
        process.exit(1)
    }
}

module.exports = connectDB;