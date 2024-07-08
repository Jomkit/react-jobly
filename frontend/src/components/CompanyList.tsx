import { useEffect } from 'react';
import JoblyApi from '../api.ts';
import CompanyCard from './CompanyCard.tsx';
import { companiesInterface } from '../types.ts';

interface propsInterface {
  companiesData: companiesInterface[] | null;
  setCompaniesData: Function;
}

const CompanyList = ({ companiesData, setCompaniesData }: propsInterface) => {

  // Run on initial page load
  useEffect(() => {
    const getCompanies = async () => {
      const res = await JoblyApi.getCompanies();
      console.log(res);
      
      setCompaniesData(res);
    }
    getCompanies();
  }, [])
  
  // Before loading company data, or no matching company
  if(companiesData === null) {
    return (<p>Loading...</p>);
  }else if(companiesData.length === 0) {
    return (<h3>No matching companies</h3>);
  }
  
  return (
    <ul style={{listStyleType:"none", paddingLeft:"0"}}>
      {companiesData?.map( cmp => (
        <CompanyCard key={cmp.handle} title={cmp.name} description={cmp.description} logoUrl={cmp.logoUrl} />
      ))}
    </ul>
  )
}

export default CompanyList