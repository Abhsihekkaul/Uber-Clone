const express = require("express");
const app = express();
// to setup the environmentqal variable in the protected place
const dotenv = require('dotenv');
dotenv.config();


app.get('/',(req,res)=>{
    res.send("hello world");
})

module.exports = app;