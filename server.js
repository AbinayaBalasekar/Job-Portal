const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const path=require("path");

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
 .then(()=>console.log("MongoDB connected"))
 .catch(err=>console.log(err));

app.use("/api/jobs",require("./routes/jobRoutes"));
app.use("/api/apply",require(".routes/applicationRoutes"));

app.use("/uploads",express.static(path.join)__dirname,"uploads")));
app.listen(5000,()=>{
 console.log("Server running on port 5000");
});