const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require("./models/userModel")
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected!')
    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`Server is running on Port : ${process.env.PORT || 4000}`);
    });
  }
).catch((err)=>{
    console.llog(err);
  })


app.get('/', (req,res)=>{
    res.send("Backend is on");
});

