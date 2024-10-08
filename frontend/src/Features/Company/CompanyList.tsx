import { useEffect } from 'react';
import JoblyApi from '../../api.ts';
import CompanyCard from './CompanyCard.tsx';
import { companiesInterface, propsListInterface } from '../../types.ts';

const CompanyList = ({ data, setData }: propsListInterface) => {

  // Run on initial page load
  useEffect(() => {
  const getCompanies = async () => {
      const res = await JoblyApi.getCompanies();
      
      setData(res);
    }
    getCompanies();
  }, [])
  
  // Before loading company data, or no matching company
  if(data === null) {
    return (<p className='text-white'>Loading...</p>);
  }else if(data.length === 0) {
    return (<h3 className='text-white'>No matching companies</h3>);
  }
  
  return (
    <ul className='card-list list-unstyled'>
      {(data as companiesInterface[])?.map( cmp => (
        <CompanyCard key={cmp.handle} handle={cmp.handle} title={cmp.name} description={cmp.description} logoUrl={cmp.logoUrl} />
      ))}
    </ul>
  )
}

export default CompanyList