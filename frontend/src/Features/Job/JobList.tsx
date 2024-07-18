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

    // Before loading company data, or no matching company
    if(data === null) {
      return (<p className='text-white'>Loading...</p>);
    }else if(data.length === 0) {
      return (<h3 className='text-white'>No matching jobs</h3>);
    }

  return (
    <ul className='card-list list-unstyled'>
      {(data as jobsInterface[])?.map( job => (
        <JobCard key={ job.id } id={job.id} title={ job.title } salary={ job.salary } equity={ job.equity } companyName={ job.companyName }/>
      ))}
    </ul>
  )
}

export default JobList