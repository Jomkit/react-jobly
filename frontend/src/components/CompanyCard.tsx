import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

interface companyPropsInterface {
    title: string;
    description: string;
    logoUrl?: string;
}

const CompanyCard = ({title, description, logoUrl}: companyPropsInterface) => {
  return (
    <li>
        <Card>
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
    </li>
  )
}

export default CompanyCard