import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api.ts";
import { jobsInterface } from "../../types.ts";
import JobCard from "../Job/JobCard.tsx";

interface companyInterface {
  name: string;
  description: string;
  numEmployees: number;
  jobs: jobsInterface[];
}

const Company = () => {
  const [ cmp, setCmp ] = useState<companyInterface | null>(null);
  const { company: handle } = useParams();
  
  // get company details and jobs after load
  useEffect(() => {
    const getCompany = async (handle: string) => {
      const res = await JoblyApi.getCompany(handle as string);    
      setCmp(res);
    }
    getCompany(handle as string);
    }, []);

    if(!cmp){
      return (<p>Loading...</p>)
    }
    
  return (
    <div>
      <div className="text-white m-2">
        <h1>{ cmp.name }</h1>
        <p>{ cmp.description }</p>
        <p>Employees: { cmp.numEmployees }</p>
      </div>
        <ul className="card-list">
          {cmp.jobs?.map( job => (
            <JobCard key={job.id} {...job} />
          ))}
        </ul>
    </div>
  )
}

export default Company