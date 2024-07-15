import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import JoblyApi from "../api.ts";
import { jobsInterface } from "../types";
import JobCard from "./JobCard.tsx";
import { userContext } from "./contexts/userContext.tsx";

interface companyInterface {
  name: string;
  description: string;
  numEmployees: number;
  jobs: jobsInterface[];
}

const Company = () => {
    
  const currUser = useContext(userContext);
  if(!currUser) {
    console.log(currUser);
    return (<Navigate to="/unauthorized-access" />);
  }
  
  const [ cmp, setCmp ] = useState<companyInterface | null>(null);
  const { company: handle } = useParams();
  
  // get company details and jobs after load
  useEffect(() => {
    const getCompany = async (handle: string) => {
      const res = await JoblyApi.getCompany(handle as string);
      console.log(res);
    
      setCmp(res);
    }
    getCompany(handle as string);
    }, []);

    if(!cmp){
      return (<p>Loading...</p>)
    }
    
  return (
    <div>
        <h1>{ cmp.name }</h1>
        <p>{ cmp.description }</p>
        <p>Employees: { cmp.numEmployees }</p>
        <ul className="card-list">
          {cmp.jobs?.map( job => (
            <JobCard {...job} />
          ))}
        </ul>
    </div>
  )
}

export default Company