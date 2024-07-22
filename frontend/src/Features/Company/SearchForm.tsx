import React, { useState } from 'react';
import JoblyApi from '../../api.ts';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { companyFormInterface } from '../../types.ts';
const SearchForm = ({ setData }: { setData: Function }) => {
    const initialState: companyFormInterface = {
        name: "", 
        minEmployees: 0,
        maxEmployees: 10000
    }
    const [ formData, setFormData ] = useState(initialState);

    // Need to apply filter to form data
    async function getFiltered(filterParams: companyFormInterface) {
        try{
            const res = await JoblyApi.getCompanies(filterParams);
            setData(res);
        } catch(e: any){
            console.log("Oops, something went wrong...");
            console.error(e);
        }
    }
    
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = evt.target;
        setFormData((data: companyFormInterface) => ({
            ...data,
            [name]: value,
        }));
    }

    function handleSubmit(evt: React.FormEvent){
        evt.preventDefault();
        if(+formData.minEmployees > +formData.maxEmployees) {
            alert("Minimum employees cannot be greater than maximum employees");
            setFormData(initialState);
            return;
        }
        getFiltered(formData);
    }

  return (
    <form className='bg-white mx-5 border border-3 border-black rounded p-1' onSubmit={handleSubmit}>
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