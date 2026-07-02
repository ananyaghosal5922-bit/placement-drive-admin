import { Link } from "react-router-dom";
import useDriveStore from "../store/DriveStore";

function Dashboard() {
  const { drives } = useDriveStore();

  return (
    <div>
      <h1>Placement Drive Dashboard</h1>

      <Link to="/create">
        <button>Create New Drive</button>
      </Link>
    {drives.length === 0 ? (
  <p>No Placement Drives Available</p>
) : (
  drives.map((drive, index) => (
    <div key={index}>
      <h3>{drive.companyName}</h3>
      <p>{drive.role}</p>
    </div>
  ))
)}

    </div>

    
  );
}

export default Dashboard;