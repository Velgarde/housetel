import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HostelPage from "./HostelPage.tsx";
import SubPage from "./SubPage.tsx";
import GrievanceForm from "./subpages/GrievanceForm.tsx";

const hostels = [
  {
    id: 1,
    name: 'Hostel 1 ',
    description: 'This is a description for Hostel 1.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 2,
    name: 'Hostel 2',
    description: 'This is a description for Hostel 2.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 3,
    name: 'Hostel 3',
    description: 'This is a description for Hostel 3.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 4,
    name: 'Hostel 4',
    description: 'This is a description for Hostel 4.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 5,
    name: 'Hostel 5',
    description: 'This is a description for Hostel 5.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 6,
    name: 'Hostel 6',
    description: 'This is a description for Hostel 6.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 7,
    name: 'Hostel 7',
    description: 'This is a description for Hostel 7.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 8,
    name: 'Hostel 8',
    description: 'This is a description for Hostel 8.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 9,
    name: 'Hostel 9',
    description: 'This is a description for Hostel 9.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 10,
    name: 'Hostel 10',
    description: 'This is a description for Hostel 10.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 11,
    name: 'Hostel 11',
    description: 'This is a description for Hostel 11.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 12,
    name: 'Hostel 12',
    description: 'This is a description for Hostel 12.',
    image: './assets/sample_hostel.jpg',
  },
  {
    id: 13,
    name: 'Hostel 13',
    description: 'This is a description for Hostel 13.',
    image: './assets/sample_hostel.jpg',
  },
];

const HostelRoute = () => {
  const { id } = useParams();
  if (id === undefined) {
    return <div>Hostel id not found in URL</div>;
  }
  const hostel = hostels.find(h => h.id === parseInt(id));
  return hostel ? <SubPage hostel={hostel} /> : <div>Hostel not found</div>
}

const App = () => (
  <Router>
    <Routes>
      <Route path={"/hostel/:id/grievance"} element={<GrievanceForm />} />
      <Route path="/hostel/:id" element={<HostelRoute />} />
      <Route path="/" element={<HostelPage />} />
    </Routes>
  </Router>
);

export default App;