import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

type Hostel = {
    id: number;
    name: string;
    description: string;
    image: string;
};

const SubPage = ({ hostel }: { hostel: Hostel }) => (
    <div className={"bg-gray-800 text-white p-4 rounded-lg"}>
        <h1 className={"text-xl font-bold main-heading main-heading-gap"}>{hostel.name}</h1>
        <div className="gridwrap">
            <Card className={"card-container"} style={{ width: '18rem' }}>
                <Card.Body>
                    <Link to={`/hostel/${hostel.id}/grievance`}>
                        <Button variant="primary">Lodge Grievance</Button>
                    </Link>
                </Card.Body>
                <Card.Text>Lodge a Complaint or Grievance to be addressed promptly</Card.Text>
            </Card>
            <Card className={"card-container"} style={{ width: '18rem' }}>
                <Card.Body>
                    <Button variant="primary">View Grievances</Button>
                </Card.Body>
                <Card.Text>View the existing complaints and check for common grievances</Card.Text>
            </Card>
            <Card className={"card-container"} style={{ width: '18rem' }}>
                <Card.Body>
                    <Button variant="primary">Check Room Availability</Button>
                </Card.Body>
                <Card.Text>Check for empty rooms in the hostels updated regularly</Card.Text>
            </Card>
            <Card className={"card-container"} style={{ width: '18rem' }}>
                <Card.Body>
                    <Button variant="primary">Request Room</Button>
                </Card.Body>
                <Card.Text>Request to be alloted one of the empty rooms</Card.Text>
            </Card>
            <Card className={"card-container"} style={{ width: '18rem' }}>
                <Card.Body>
                    <Button variant="primary">Hostel Chat Room</Button>
                </Card.Body>
                <Card.Text>Take part in peer communication regarding the different problems</Card.Text>
            </Card>
            <Card className={"card-container"} style={{ width: '18rem' }}>
                <Card.Body>
                    <Button variant="primary">Notices</Button>
                </Card.Body>
                <Card.Text>All the important notices issued by the relevant authority regarding grievances</Card.Text>
            </Card>
        </div>
    </div>
)

export default SubPage;