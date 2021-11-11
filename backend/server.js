require('dotenv').config()
const express = require("express")
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

const userRouters = require('./routes/userRoutes')
const {errorHandler,notFound} = require('./middlewares/errorMiddleware')
// const cors = require('cors')

// app.use(cors());
connectDB()

const app = express();


app.use(express.json())

app.use("/products",productRoutes)
app.use("/user",userRouters)
app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`server listening on port ${port}`))