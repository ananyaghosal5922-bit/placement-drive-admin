import { Link } from "react-router-dom";
import { useState } from "react";
import useDriveStore from "../store/DriveStore";

import {
  FaBuilding,
  FaBriefcase, 
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { FaMoneyBill1 } from "react-icons/fa6";

function Dashboard() {
  const { drives, deleteDrive } = useDriveStore();
  const [search, setSearch] = useState("");

  const filteredDrives = drives.filter((drive) =>
  drive.companyName.toLowerCase().includes(search.toLowerCase())
);
  console.log("Drives:",drives);
  return (
    <div>
      <h1>Placement Drive Dashboard</h1>
      <p>Manage all placement drives.</p>

      <h3>Total Drives: {drives.length}</h3>

      <hr />
      <Link to="/create">
        <button>Create New Drive</button>
      </Link>
      <br />
      <br />
<input
  type="text"
  placeholder="Search by Company Name"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
   <br />
    <br />
    {drives.length === 0 ? (
  <p>No Placement Drives Available</p>
  ) : (
  filteredDrives.map((drive, index) => (
    <div key={index}>
    <h3> <FaBuilding />{drive.companyName}</h3>
      <p><FaBriefcase />{drive.role}</p>
      <p> <FaMoneyBill1 />/CTC:{drive.ctc}</p>
       <p> <FaMapMarkerAlt />Location: {drive.location}</p>
       <p><FaCalendarAlt />Deadline: {drive.deadline}</p>

  <Link to={`/drive/${drive.id}`}>
  <button>View Details</button>
   </Link>
      <button
  onClick={() => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this drive?"
    );

    if (confirmDelete) {
      deleteDrive(index);
    }
  }}
>
  Delete
</button>    
    </div>
  ))
)}
    </div>   
  );
}

export default Dashboard;