import React, { useState } from 'react';
import JoblyApi from '../api.ts';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

interface formDataInterface {
    name: string;
    minEmployees: number;
    maxEmployees: number;
}

const SearchForm = ({ setCompaniesData }: { setCompaniesData: Function }) => {
    const [ formData, setFormData ] = useState({
        name: "", 
        minEmployees: 0,
        maxEmployees: 10000
    });

    // Need to apply filter to form data
    async function getFilterCompanies(filterParams: formDataInterface) {
        try{
            const res = await JoblyApi.getCompanies(filterParams);
            setCompaniesData(res);
        } catch(e: any){
            console.log("Oops, something went wrong...");
            console.error(e);
        }
    }
    
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = evt.target;
        setFormData((data: formDataInterface) => ({
            ...data,
            [name]: value,
        }));
    }

    function handleSubmit(evt: React.FormEvent){
        evt.preventDefault();
        console.log("Submitting...");
        getFilterCompanies(formData);
    }

  return (
    <form onSubmit={handleSubmit}>
        <Row className='m-lg-4 align-items-center'>
            <Col lg={6}>
                <FormGroup>
                    <Label
                        className='visually-hidden'
                        for='name'
                    >
                        Name
                    </Label>
                    <Input
                    id='name'
                    name='name'
                    placeholder='search companies'
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    />            
                </FormGroup>
            </Col>
            <Col lg={2}>
                <FormGroup floating>
                    <Input 
                        id="minEmployees"
                        name="minEmployees"
                        placeholder='0'
                        min={0}
                        type="number"
                        bsSize='sm'
                        value={formData.minEmployees}
                        onChange={handleChange}
                    />
                    <Label for="minEmployees">Min Employees</Label>
                </FormGroup>
            </Col>
            <Col lg={2}>
                <FormGroup floating>
                    <Input 
                        id="maxEmployees"
                        name="maxEmployees"
                        placeholder='0'
                        min={0}
                        type="number"
                        bsSize='sm'
                        value={formData.maxEmployees}
                        onChange={handleChange}
                    />
                    <Label for="maxEmployees">Max Employees</Label>
                </FormGroup>
            </Col>

            <Col className='col-2'>
                <button className='btn bg-primary text-light btn-block'>Search</button>
            </Col>
        </Row>
    </form>
  )
}

export default SearchForm