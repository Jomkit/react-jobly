import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import './CompanyCard.css';

interface companyPropsInterface {
    handle: string;
    title: string;
    description: string;
    logoUrl?: string;
}

const CompanyCard = ({handle, title, description, logoUrl}: companyPropsInterface) => {
  return (
    <li>
        <Link to={`/companies/${handle}`}
            className='text-reset 
                text-decoration-none'
        >
            <Card className='CompanyCard-card p-3'>
                <CardTitle tag="h3">
                    {title}
                </CardTitle>
                <CardBody>
                    <CardText>{description}</CardText>
                    {logoUrl ? 
                    <img
                        alt="company logo"
                        src={logoUrl} /> :
                    <i className="fa-solid fa-image-portrait" style={{ fontSize: '100px' }}></i>
                    }
                </CardBody>
            </Card>
        </Link>
    </li>
  )
}

export default CompanyCard