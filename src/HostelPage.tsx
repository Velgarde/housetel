
import HostelCard from "./hostels/pgh.tsx";

const hostels = [
    {
        id: 1,
        name: 'Hostel 1 ',
        description: 'This is a description for Hostel 1.',
        image: 'url-to-hostel-1-image',
    },
    {
        id: 2,
        name: 'Hostel 2',
        description: 'This is a description for Hostel 2.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 3,
        name: 'Hostel 3',
        description: 'This is a description for Hostel 3.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 4,
        name: 'Hostel 4',
        description: 'This is a description for Hostel 4.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 5,
        name: 'Hostel 5',
        description: 'This is a description for Hostel 5.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 6,
        name: 'Hostel 6',
        description: 'This is a description for Hostel 6.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 7,
        name: 'Hostel 7',
        description: 'This is a description for Hostel 7.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 8,
        name: 'Hostel 8',
        description: 'This is a description for Hostel 8.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 9,
        name: 'Hostel 9',
        description: 'This is a description for Hostel 9.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 10,
        name: 'Hostel 10',
        description: 'This is a description for Hostel 10.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 11,
        name: 'Hostel 11',
        description: 'This is a description for Hostel 11.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 12,
        name: 'Hostel 12',
        description: 'This is a description for Hostel 12.',
        image: 'url-to-hostel-2-image',
    },
    {
        id: 13,
        name: 'Hostel 13',
        description: 'This is a description for Hostel 13.',
        image: 'url-to-hostel-2-image',
    },
];

const HostelPage = () => (
    <div className="grid grid-cols-3 gap-4">
        {hostels.map((hostel) => (
            <HostelCard key={hostel.id} hostel={hostel} />
        ))}
    </div>
);

export default HostelPage;