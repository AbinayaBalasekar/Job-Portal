import { useState } from "react";
import axios from "axios";
function ApplyJob({ jobId }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [resume, setResume] = useState(null);
const apply = async () => {
const formData = new FormData();
formData.append("name", name);
formData.append("email", email);
formData.append("resume", resume);
formData.append("jobId", jobId);
await axios.post("http://localhost:5000/api/apply", formData);
alert("Applied Successfully");
};
return (
<div className="row g-2">

<div className="col">
<input className="form-control" placeholder="Name"
onChange={e=>setName(e.target.value)} />
</div>
<div className="col">
<input className="form-control" placeholder="Email"
onChange={e=>setEmail(e.target.value)} />
</div>
<div className="col">
<input type="file" className="form-control" onChange={e=>setResume(e.target.files[0])}
/>
</div>
<div className="col">
<button className="btn btn-success w-100" onClick={apply}>Apply</button>
</div>
</div>
);
}
export default ApplyJob;