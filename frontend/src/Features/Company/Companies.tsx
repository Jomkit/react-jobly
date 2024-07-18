import { useContext, useState } from 'react';
import CompanyList from './CompanyList'
import SearchForm from './SearchForm'
import { companiesInterface } from '../../types';
import { userContext } from '../../components/contexts/userContext';
import { Navigate } from 'react-router-dom';
const Companies = () => {
    
  const currUser = useContext(userContext);
  if(!currUser) {
    console.log(currUser);
    return (<Navigate to="/unauthorized-access" />);
  }
  
  const [companiesData, setCompaniesData] = useState<companiesInterface[] | null>(null);
  return (
    <div>
        <h1 style={{color: "white"}}>Companies</h1>
        <SearchForm setData={setCompaniesData} />
        <CompanyList data={companiesData} setData={setCompaniesData} />
    </div>
  )
}

export default Companies