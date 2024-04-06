import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

type Hostel = {
  id: number;
  name: string;
  description: string;
  image: string;
  // add other properties as needed
};

const HostelCard = ({ hostel }: { hostel: Hostel }) => (
  <Card className={"card-container"} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={hostel.image} className={"card-image"}/>
    <Card.Body>
        <Link to={`/hostel/${hostel.id}`}>
        <Button variant="primary"><Card.Title>{hostel.name}</Card.Title></Button>
    </Link>

      <Card.Text>
        {hostel.description}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default HostelCard;