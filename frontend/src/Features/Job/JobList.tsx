import { useEffect } from 'react'
import { jobsInterface, propsListInterface } from '../../types.ts'
import JobCard from './JobCard'
import JoblyApi from '../../api.ts'

const JobList = ({data, setData}: propsListInterface) => {
  // Run on initial page load
  useEffect(() => {
    const getJobs = async () => {
      const res = await JoblyApi.getJobs();
      
      setData(res);
    }
    getJobs();
  }, [])

  return (
    <ul className='card-list'>
      {(data as jobsInterface[])?.map( job => (
        <JobCard key={ job.id } id={job.id} title={ job.title } salary={ job.salary } equity={ job.equity } companyName={ job.companyName }/>
      ))}
    </ul>
  )
}

export default JobList