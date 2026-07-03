import {Link, useParams } from "react-router-dom";
import useDriveStore from "../store/DriveStore";

function DriveDetails() {
  const { id } = useParams();

  const { drives } = useDriveStore();

  const drive = drives.find(
    (item) => item.id === Number(id)
  );

  if (!drive) {
    return <h2>Placement Drive Not Found</h2>;
  }

  return (
    <div>
      <h1>{drive.companyName}</h1>

      <p>Website: {drive.website}</p>

      <p>Industry: {drive.industry}</p>

      <p>Role: {drive.role}</p>

      <p>Designation: {drive.designation}</p>

      <p>CTC: {drive.ctc}</p>

      <p>Location: {drive.location}</p>

      <p>CGPA: {drive.cgpa}</p>

      <p>Batch: {drive.batch}</p>

      <p>Branches: {drive.branches.join(", ")}</p>

      <p>Email: {drive.email}</p>

      <p>Deadline: {drive.deadline}</p>

      <Link to={`/edit/${drive.id}`}>
     <button>Edit</button>
     </Link>
    </div>
  );
}

export default DriveDetails;