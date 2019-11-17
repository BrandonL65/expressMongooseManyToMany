const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Connect to DB
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log("Connected")
})

//Middleware 
app.use(cors());
app.use(express.json());

//Routes 

//Connect to SERVER
app.listen(PORT);