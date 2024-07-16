import { useContext, useState } from "react"
import JobList from "./JobList"
import { jobsInterface } from "../../types";
import JobSearchForm from "./JobSearchForm";
import { userContext } from "../../components/contexts/userContext";
import { Navigate } from "react-router-dom";

const Jobs = () => {
    
  const currUser = useContext(userContext);
  if(!currUser) {
    console.log(currUser);
    return (<Navigate to="/unauthorized-access" />);
  }

  const [ jobs, setJobs ] = useState<jobsInterface[] | null>(null);
  
  return (
    <>
      <h1>Jobs</h1>
      <JobSearchForm setData={setJobs} />
      <JobList data={jobs} setData={setJobs} />
    </>
  )
}

export default Jobs