import { Button, Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
import { jobsInterface, userInterface } from '../../types'
import { useContext, useState } from 'react'
import { sharedMethodsContext } from '../../components/contexts/sharedMethodsContext'
import { userContext } from '../../components/contexts/userContext'

const JobCard = ({ id, title, salary, equity, companyName }: jobsInterface) => {
    const currUser: userInterface | null = useContext(userContext);
    const { applyToJob } = useContext(sharedMethodsContext);
    const [ isDisabled, setIsDisabled ] = useState(false);
    
    const handleClick = (evt: any) => {
        if(applyToJob){
            applyToJob(evt.target.value);
            setIsDisabled(true);
        }
    }
    
  if(currUser) return (
    <li>
        <Card className='p-1 pt-3 m-5 border border-3 border-black'>
            <CardTitle tag="h5" className='text-start mx-3'>
                {title}
            </CardTitle>
            <CardBody>
                <Row>
                    <Col sm="8" className='text-start'>
                        <p>{ companyName }</p>
                        <p>Salary: { salary }</p>
                        <p>Equity: { equity === null ? "n/a" : (+equity).toFixed(2) }</p>
                    </Col>
                    <Col sm="4" className='text-end mt-auto pb-2'>
                    { currUser.applications && currUser.applications.includes(id) ? 
                        <Button className='bg-danger' onClick={handleClick} disabled>Apply</Button>
                        :
                        <Button className='bg-danger' value={id} onClick={handleClick} disabled={isDisabled}>Apply</Button>
                    }
                    </Col>
                </Row>
            </CardBody>
            
        </Card>
    </li>
  )
}

export default JobCard