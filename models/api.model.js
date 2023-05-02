const mongoose=require("mongoose")
const apischema=mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId,required:true},
    ipcity:[{type:String,required:true}]
})
const Model=mongoose.model("cities",apischema)
module.exports={Model}