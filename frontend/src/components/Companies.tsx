import { useState } from 'react';
import CompanyList from './CompanyList'
import SearchForm from './SearchForm'
import { companiesInterface } from '../types';
const Companies = () => {
  
  const [companiesData, setCompaniesData] = useState<companiesInterface[] | null>(null);
  return (
    <>
        <SearchForm setData={setCompaniesData} />
        <CompanyList data={companiesData} setData={setCompaniesData} />
    </>
  )
}

export default Companies