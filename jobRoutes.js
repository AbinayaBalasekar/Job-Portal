const express=require("express");
const router=express.Router();
const Job=require("../models/Job");
router.post("/",aysnc(req,res)=>{
 const job=new Job(req.body);
 await job.save();
res.statuts(201).json(job);
});
router.get("/",aysnc(req,res0=>{
 const search=req.query.search;
 const jobs=search
  ?await job.find({title:{$regex:search,$options:"i"}})
  :await Job.find()
  res.json(jobs);
});
 module.exports=router;