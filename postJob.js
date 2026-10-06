import { useState } from "react";
import axios from "axios";
function PostJob() {
const [job, setJob] = useState({
title: "", company: "", location: "", description: ""
});
const submitJob = async () => {
await axios.post("http://localhost:5000/api/jobs", job);
alert("Job Posted");
setJob({ title:"", company:"", location:"", description:"" });
};
return (
<div className="card mb-4 p-3">
<h5>Post Job</h5>
{Object.keys(job).map(key => (
<input
key={key}
className="form-control mb-2"
placeholder={key}
value={job[key]}
onChange={e => setJob({ ...job, [key]: e.target.value })}
/>
))}
<button className="btn btn-primary" onClick={submitJob}>Post</button>
</div>
);
}