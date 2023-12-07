const express = require("express");
const { formModel } = require("../Model/form.model");

const formRouter = express.Router();

formRouter.post("/", async(req,res) => {
    try{
    // const {quesCategory, ansCategory, quesCloze, ansCloze, quesComprehension, optionComprehension, ansComprehension} = req.body;
     const data = new formModel(req.body);
     await data.save();
      res.status(201).json({msg: "Data has been added"});
    }catch(err){
        console.log(err);
        res.status(400).json({error:err});
    }
})


formRouter.patch("/:id", async(req,res) => {
    try{
     const {id} = req.params;
     await formModel.findByIdAndUpdate({_id:id}, req.body);
     res.status(200).json({msg: "Data has been updated"});
    }catch(err){
        console.log(err);
        res.status(400).json({error:err});
    }
})


module.exports = {
    formRouter
}