import { Button, Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
import { jobsInterface } from '../types'

const JobCard = ({ title, salary, equity, companyName }: jobsInterface) => {
  return (
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
                        <Button className='bg-danger'>Apply</Button>
                    </Col>
                </Row>
            </CardBody>
            
        </Card>
    </li>
  )
}

export default JobCard