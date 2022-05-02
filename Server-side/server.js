//ANCHOR Preparation
// reading secrets key
require('dotenv').config();
// import modules
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const https = require("https");
// Api routes
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const bodyParser = require('body-parser');
//import middleware to handle error
//const{notFound,errorHandler}= require("./middleware/errorMiddleware")


// connect to MongoDB
const connectDB = require("./config/db")

//ANCHOR start the server
connectDB() //connect to database with base log in

const app = express();// start an instance of the app
// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responsesapp.use(cors());
app.options("*", cors());
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
app.use("/transaction", transactionRoutes)


const PORT = process.env.PORT || 5000 // if reading .env file fail => running on port 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))