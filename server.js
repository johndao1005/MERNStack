const express = require("express")
const bodyParser = require("body-parser")// take request and get data from the body;
const mongoose = require('mongoose')

const items = require('./routes/api/items')
const userRoutes = require("./routes/api/userRoutes")
const app = express();
const {notFound, errorHandler}= require("./middlewares/errorMiddleware")
app.use(express.json())

const db = require('./config/db').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(()=>console.log('MongoDB Connected...'))
    .catch(err => console.error(err))
//user routes
app.use('/api/item',items)

app.use('api/users',userRoutes)

// call middleware to handle errorHandler
app.use(notFound),
app.use(errorHandler)

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`server listening on port ${port}`))