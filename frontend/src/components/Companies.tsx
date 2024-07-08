import { useState } from 'react';
import CompanyList from './CompanyList'
import SearchForm from './SearchForm'
import { companiesInterface } from '../types';
const Companies = () => {
  
  const [companiesData, setCompaniesData] = useState<companiesInterface[] | null>(null);
  return (
    <>
        <SearchForm setCompaniesData={setCompaniesData} />
        <CompanyList companiesData={companiesData} setCompaniesData={setCompaniesData} />
    </>
  )
}

export default Companies