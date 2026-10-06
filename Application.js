const mongoose=require("mongoose");
const applicationSchema=new mongoose.Schema({
name:{
 type:String,
 trim:true,
 required:true
},
email:{
 type:String,
 trim:true,
 required
},
resume:{
 type:String,
 trim:true,
required
},
jobId:{
 type:String,
 ref:"Job",
 reuired:true
}
},
{trimstamps:true}
);
module.exports=mongoose.model("Application",applicationSchema);

