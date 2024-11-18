const mongoose = require("mongoose");
const express = require("express");
const app = express();
const user = require("../models/userModel")
const router = express.Router();




// create api, by this user can create new data and save in db
router.post("/", async (req,res)=>{
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


// read operation, by this on screen all data should come
router.get("/all", async (req,res)=>{
    try{
        const allData = await user.find();
        res.status(201).json(allData);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});


// fetching specific data only 
router.get("/:id", async (req,res)=>{
    const {id} = req.params;
    try{
        const data = await user.findById(id);
        res.status(201).json(data);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});


//deleting the specific data
router.delete("/:id", async (req,res)=>{
    const {id} = req.params;
    try{
        const deletedData = await user.findByIdAndDelete(id);
        res.status(201).json(deletedData);
    }catch(error){
        res.status(400).json({error:error.message});
    }
})


module.exports = router;