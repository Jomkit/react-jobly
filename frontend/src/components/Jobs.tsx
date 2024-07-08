import { useState } from "react"
import JobList from "./JobList"
import { jobsInterface } from "../types";

const Jobs = () => {
  const [ jobs, setJobs ] = useState<jobsInterface[] | null>(null);
  
  return (
    <>
      <h1>Jobs</h1>
      <JobList data={jobs} setData={setJobs} />
    </>
  )
}

export default Jobs