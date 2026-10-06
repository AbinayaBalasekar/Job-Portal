const mongoose=require("mongoose");
const jobSchema=new mongoose.Schema({
title:{
 type:String,
 trim:true,
 requires:true
},
 company:{
 type:String,
 trim:true,
 required:true
},
 location:{
 type:String,
 trim:true,
 required:true
},
 description:{
 type:String,
 trim:true,
 required:true
}
},
{timestamps:true}
);
module.exports=mongoose.model("Job".jobSchema);
