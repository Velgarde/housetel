type Hostel = {
  id: number;
  name: string;
  description: string;
  image: string;
  // add other properties as needed
};

const SubPage = ({ hostel }: { hostel: Hostel }) => (
  <div className={"bg-gray-800 text-white p-4 rounded-lg"}>
    <h2 className={"text-xl font-bold"}>{hostel.name}</h2>
    <div>
      <button>Lodge Grievance</button>
      <button>View Grievances</button>
      <button>Check Room Availability</button>
      <button>Request Room</button>
      <button>Hostel Chat Room</button>
      <button>Notices</button>
    </div>
  </div>
)

export default SubPage;