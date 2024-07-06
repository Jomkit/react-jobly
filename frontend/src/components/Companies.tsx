import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import JoblyApi from '../api';

interface companiesInterface {
  handle: string;
  name: string;
  description: string;
  numEmployees: number;
  logoUrl: string;
}

const Companies = () => {
  const [companiesData, setCompaniesData] = useState<companiesInterface | null>(null);

  useEffect(() => {
    const getCompanies = async () => {
      const res = await JoblyApi.getCompanies();
      console.log(res);
      
      setCompaniesData(res);
    }
    getCompanies();
  }, [])

  debugger;
  
  return (
    <div>
        <h1>All Companies</h1>
        <Link to="/companies/company1">Company 1</Link>
    </div>
  )
}

export default Companies