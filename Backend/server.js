const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require("./models/userModel")
require('dotenv').config();

app.use(express.json());


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


// create api 

app.post("/", async (req,res)=>{
    const {name,email,age} = req.body;
    try{
        const userAdded = await user.create({
            name : name,
            email : email,
            age : age
        })
        res.status(201).json(userAdded);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
})
