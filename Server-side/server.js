//ANCHOR Preparation
// reading secrets key
require('dotenv').config();
// import modules
const express = require("express")
const morgan = require("morgan")

// Api routes
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

//import middleware to handle error
//const{notFound,errorHandler}= require("./middleware/errorMiddleware")


// connect to MongoDB
const connectDB = require("./config/db")

//ANCHOR start the server
connectDB() //connect to database with base log in

const app = express();// start an instance of the app


// read json data and url code
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes list
app.use("/user", userRoutes)
app.use("/", transactionRoutes)


const PORT = process.env.PORT || 3000 // if reading .env file fail => running on port 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))