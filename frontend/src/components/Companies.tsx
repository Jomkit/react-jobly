import { useContext, useState } from 'react';
import CompanyList from './CompanyList'
import SearchForm from './SearchForm'
import { companiesInterface } from '../types';
import { userContext } from './contexts/userContext';
import { Navigate } from 'react-router-dom';
const Companies = () => {
    
  const currUser = useContext(userContext);
  if(!currUser) {
    console.log(currUser);
    return (<Navigate to="/unauthorized-access" />);
  }
  
  const [companiesData, setCompaniesData] = useState<companiesInterface[] | null>(null);
  return (
    <>
        <SearchForm setData={setCompaniesData} />
        <CompanyList data={companiesData} setData={setCompaniesData} />
    </>
  )
}

export default Companies