const {Router}=require("express");
const apirouter=Router();
const { redisClient } = require('../server/redis');
const {ipvalidator}=require("../middleware/validator")
const {logger}=require("../middleware/logger")
const axios=require("axios")
const{Model}=require("../models/api.model")

apirouter.get("/ip-info/:ipaddress",ipvalidator,async(req,res)=>{
    const ipaddress=req.ipaddress;
    redisClient.get(ipaddress,async(err,cachedData)=>{
        if(cachedData){
            return res.json(JSON.parse(cachedData));
        }else{
            try {
                const response=await axios.get(`https://ipapi.co/${ipaddress}/json/`);
                const ipinfo=response.data
                redisClient.setEx(ipaddress,21600,JSON.stringify(ipinfo))
            } catch (error) {
                console.log(error.message);
            }
        }
    })

})
module.exports={apirouter}