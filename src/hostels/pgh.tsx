import { Link } from 'react-router-dom';

type Hostel = {
  id: number;
  name: string;
  description: string;
  image: string;
  // add other properties as needed
};

const HostelCard = ({ hostel }: { hostel: Hostel }) => (
  <div>
    <Link to={`/hostel/${hostel.id}`} className={"block bg-gray-800 text-white p-4 rounded-lg"}>
    <h2 className={"text-xl font-bold"}>{hostel.name}</h2>
  </Link>
    <p>{hostel.description}</p>
  </div>
)

export default HostelCard;