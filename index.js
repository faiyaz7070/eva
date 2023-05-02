const express=require("express")
const loginrouter=require("./routes/user.routes")
const {connection}=require("./config/db")
const app=express()
const {logger}=require("./middleware/logger")

let loggert=(req,res,next)=>{
    logger.log("info",`A ${req.method} request is made on url : ${req.url}`)
    next()
}
app.use(loggert)
app.use(express.json())
app.use(loginrouter)






app.listen(4500,async()=>{

try {
    await connection
    console.log("connected to db");
} catch (error) {
    console.log(error);
}


console.log("listening on port 4500");

})