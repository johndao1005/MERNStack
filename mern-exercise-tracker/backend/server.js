const express = require('express'); //using express
const cors = require('cors'); //using cors

require('dotenv').config(); //create the environment variable

const app = express(); // create new instance of express called app
const port = process.env.PORT || 5000; //running on port 5000

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})