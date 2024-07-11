import React, { useState } from 'react';
import JoblyApi from '../api.ts';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { jobsFormInterface } from '../types.ts';

const JobSearchForm = ({ setData }: { setData: Function }) => {
    const initialState: jobsFormInterface = {
        title: "",
        minSalary: 0,
        hasEquity: false
    }
    const [ formData, setFormData ] = useState(initialState);

    // Need to apply filter to form data
    async function getFiltered(filterParams: jobsFormInterface) {
        try{
            const res = await JoblyApi.getJobs(filterParams);
            setData(res);
        } catch(e: any){
            console.log("Oops, something went wrong...");
            console.error(e);
        }
    }
    
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = evt.target;
        setFormData((data: jobsFormInterface) => ({
            ...data,
            [name]: value,
        }));
    }

    function handleSubmit(evt: React.FormEvent){
        evt.preventDefault();
        console.log("Submitting...");
        console.log(formData);
        getFiltered(formData);
    }

  return (
    <form onSubmit={handleSubmit}>
        <Row className='m-lg-4 align-items-center'>
            <Col lg={6}>
                <FormGroup>
                    <Label
                        className='visually-hidden'
                        for='title'
                    >
                        Job Title
                    </Label>
                    <Input
                    id='title'
                    name='title'
                    placeholder='search job titles'
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    />            
                </FormGroup>
            </Col>
            <Col lg={2}>
                <FormGroup floating>
                    <Input 
                        id="minSalary"
                        name="minSalary"
                        placeholder='0'
                        min={0}
                        type="number"
                        bsSize='sm'
                        value={formData.minSalary}
                        onChange={handleChange}
                    />
                    <Label for="minSalary">Minimum Salary</Label>
                </FormGroup>
            </Col>
            <Col lg={2}>
                <FormGroup check inline>
                    <Input 
                        id="hasEquity"
                        name="hasEquity"
                        type="checkbox"
                        value="true"
                        onChange={handleChange}
                    />
                    <Label check for="hasEquity">Has Equity?</Label>
                </FormGroup>
            </Col>

            <Col className='col-2'>
                <button className='btn bg-primary text-light btn-block'>Search</button>
            </Col>
        </Row>
    </form>
  )
}

export default JobSearchForm