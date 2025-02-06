// to setup the environmentqal variable in the protected place
const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express();
const cors = require('cors');
const connecttoDB = require('./db/db.js');

// using cors middleware
app.use(cors());

// connecting to the database 
connecttoDB();

app.get('/',(req,res)=>{
    res.send("hello world");
})

module.exports = app;