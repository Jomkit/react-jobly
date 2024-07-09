import { useEffect } from 'react'
import { jobsInterface, propsListInterface } from '../types'
import JobCard from './JobCard'
import JoblyApi from '../api.ts'

const JobList = ({data, setData}: propsListInterface) => {
  // Run on initial page load
  useEffect(() => {
    const getJobs = async () => {
      const res = await JoblyApi.getJobs();
      console.log(res);
      
      setData(res);
    }
    getJobs();
  }, [])

  return (
    <ul style={{ listStyleType:"none", padding:'0' }}>
      {(data as jobsInterface[])?.map( job => (
        <JobCard key={job.id} title={job.title} salary={job.salary} equity={job.equity} companyName={job.companyName }/>
      ))}
    </ul>
  )
}

export default JobList