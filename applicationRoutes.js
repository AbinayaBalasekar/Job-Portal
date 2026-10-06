const express=require("express");
const multer=require("multer");
const Application=require("../modelas/Application");

const router=express.Router();

const storage=multer.diskStorage({
 destination:"uploads/",
 filename:(req,file,cb)=>
  cb(null,Date.now()+"-"+file.originalname)
});
const upload=multer({storage});
router.post("/",upload.single("resume"),async(req,res)=>{
 const application=new Application({
  name:req.body.name,
  email:req.body.email,
  resume: req.file.filename,
  jobId: req.body.jobId
});
 await application.save();
 res.status(201).json({ message: &quot;Applied Successfully&quot; });
});
module.exports = router;