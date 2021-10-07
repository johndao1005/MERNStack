require('dotenv').config()
const express = require("express")
const connectDB = require('./config/db')

connectDB()

const app = express();
app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`server listening on port ${port}`))