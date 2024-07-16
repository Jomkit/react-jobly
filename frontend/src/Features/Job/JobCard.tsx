import { Button, Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
import { jobsInterface, userInterface } from '../../types'
import { useContext } from 'react'
import { sharedMethodsContext } from '../../components/contexts/sharedMethodsContext'
import { userContext } from '../../components/contexts/userContext'

const JobCard = ({ id, title, salary, equity, companyName }: jobsInterface) => {
    const currUser: userInterface = useContext(userContext);
    console.log("currUser", currUser);
    const { applyToJob } =useContext(sharedMethodsContext);
    
  if(currUser) return (
    <li>
        <Card className='p-1 pt-3'>
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
                    { currUser.applications.includes(id) ? 
                        <Button className='bg-danger' onClick={applyToJob} disabled>Apply</Button>
                        :
                        <Button className='bg-danger' value={id} onClick={(evt) => applyToJob(evt.target.value)}>Apply</Button>
                    }
                    </Col>
                </Row>
            </CardBody>
            
        </Card>
    </li>
  )
}

export default JobCard