import PostJob from "./components/PostJob";
import JobList from "./components/JobList";
function App() {

return (
<div className="container mt-4">
<h2 className="text-center mb-4">Job Portal v2.0</h2>
<PostJob />
<JobList />
</div>
);
}
export default App;