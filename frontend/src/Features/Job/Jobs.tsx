import { useState } from "react"
import JobList from "./JobList"
import { jobsInterface } from "../../types";
import JobSearchForm from "./JobSearchForm";

const Jobs = () => {
  const [ jobs, setJobs ] = useState<jobsInterface[] | null>(null);
  
  return (
    <>
      <h1 style={{color: "white"}}>Jobs</h1>
      <JobSearchForm setData={setJobs} />
      <JobList data={jobs} setData={setJobs} />
    </>
  )
}

export default Jobs