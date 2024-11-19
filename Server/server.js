const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());

//cors fix
const cors = require('cors');
app.use(cors()); 

const router = require("./routes/userRoute");


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected!')
    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`Server is running on Port : ${process.env.PORT || 4000}`);
    });
  }
).catch((err)=>{
    console.log(err);
  })


app.get('/', (req,res)=>{
    res.send("Backend is on");
});

app.use(router);
