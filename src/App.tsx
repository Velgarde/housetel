import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HostelPage from "./HostelPage.tsx";
import SubPage from "./SubPage.tsx";

const hostels = [
  {
    id: 1,
    name: 'Hostel 1',
    description: 'This is a description for Hostel 1.',
    image: 'url-to-hostel-1-image',
  },
  {
    id: 2,
    name: 'Hostel 2',
    description: 'This is a description for Hostel 2.',
    image: 'url-to-hostel-2-image',
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
      <Route path="/hostel/:id" element={<HostelRoute />} />
      <Route path="/" element={<HostelPage />} />
    </Routes>
  </Router>
);

export default App;