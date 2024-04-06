
import HostelCard from "./hostels/pgh.tsx";
import sample from "./assets/sample_hostel.jpg";

const hostels = [
    {
        id: 1,
        name: 'Hostel 1 ',
        description: 'This is a description for Hostel 1.',
        image: sample,
    },
    {
        id: 2,
        name: 'Hostel 2',
        description: 'This is a description for Hostel 2.',
        image: sample,
    },
    {
        id: 3,
        name: 'Hostel 3',
        description: 'This is a description for Hostel 3.',
        image: sample,
    },
    {
        id: 4,
        name: 'Hostel 4',
        description: 'This is a description for Hostel 4.',
        image: sample,
    },
    {
        id: 5,
        name: 'Hostel 5',
        description: 'This is a description for Hostel 5.',
        image: sample,
    },
    {
        id: 6,
        name: 'Hostel 6',
        description: 'This is a description for Hostel 6.',
        image: sample,
    },
    {
        id: 7,
        name: 'Hostel 7',
        description: 'This is a description for Hostel 7.',
        image: sample,
    },
    {
        id: 8,
        name: 'Hostel 8',
        description: 'This is a description for Hostel 8.',
        image: sample,
    },
    {
        id: 9,
        name: 'Hostel 9',
        description: 'This is a description for Hostel 9.',
        image: sample,
    },
    {
        id: 10,
        name: 'Hostel 10',
        description: 'This is a description for Hostel 10.',
        image: sample,
    },
    {
        id: 11,
        name: 'Hostel 11',
        description: 'This is a description for Hostel 11.',
        image: sample,
    },
    {
        id: 12,
        name: 'Hostel 12',
        description: 'This is a description for Hostel 12.',
        image: sample,
    },
    {
        id: 13,
        name: 'Hostel 13',
        description: 'This is a description for Hostel 13.',
        image: sample,
    },
];

const HostelPage = () => (
    <div>
        <div>
            <h1 className="main-heading main-heading-gap">HOUSETEL</h1>
        </div>
        <div className="gridwrap">
            {hostels.map((hostel) => (
                <HostelCard key={hostel.id} hostel={hostel} />
            ))}
        </div>
    </div>
);

export default HostelPage;