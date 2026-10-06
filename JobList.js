import { useEffect, useState } from "react";
import axios from "axios";
import ApplyJob from "./ApplyJob";
function JobList() {

const [jobs, setJobs] = useState([]);
const [search, setSearch] = useState("");
useEffect(() => {
axios
.get(`http://localhost:5000/api/jobs?search=${search}`)
.then(res => setJobs(res.data));
}, [search]);
return (
<>
<input
className="form-control mb-3"
placeholder="Search jobs"
onChange={e => setSearch(e.target.value)}
/>
{jobs.map(job => (
<div className="card mb-3 p-3" key={job._id}>
<h5>{job.title}</h5>
<p>{job.company} - {job.location}</p>
<ApplyJob jobId={job._id} />
</div>
))}
</>
);
}
export default JobList;