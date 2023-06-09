const express = require('express');
const router = new express.Router();
const Request = require("../models/request.schema");

router.post("/request", async(req,res)=>{

    try{
    const request = new Request(req.body);

    const createRequest=await request.save();
    res.status(201).send(createRequest);
    }catch(e) {res.status(400).send(e);}
})

router.get("/request", async (req,res)=>{

    try{
        const requestdata = await Request.find();
        res.send(requestdata);
    }catch(e){
        res.send(e)
    }
})

module.exports = router;