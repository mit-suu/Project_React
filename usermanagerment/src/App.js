import React, { useState } from 'react';

export default function App() {
  const storagteJobs= JSON.parse(localStorage.getItem('jobs'))
  const [jobs,setJobs]= useState(storagteJobs??[])
  const [job,setJob]=useState('')
    console.log(job)

    const handleSubmit =()=>{
      setJobs(prev=>{
        const newJobs=[...prev,job]
        localStorage.setItem("jobs",JSON.stringify(newJobs))
        return newJobs
      })
      setJob('')
    }
const handleDelete=(index)=>{
const newJobs = jobs.filter((_, i) => i !== index);
    setJobs(newJobs);
    localStorage.setItem('jobs', JSON.stringify(newJobs));
}
  return (
<div style={{padding: 32}}>
    <input value = {job}
     onChange={e=>setJob(e.target.value)}
     />
    <button onClick={handleSubmit}>Add</button>

    <ul>
    {
      jobs.map((job,index)=>(
        <li key={index}>{job} <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: 10 }}
            >
              ❌ Delete
            </button></li>
      ))
    }
    </ul>
</div>
);
}
