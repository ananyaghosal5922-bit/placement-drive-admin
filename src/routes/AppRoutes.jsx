import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import MultiStepForm from "../pages/MultiStepForm";
import DriveDetails from "../pages/DriveDetails";

function AppRoutes() {
  return (
      <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/create" element={<MultiStepForm />} />
  <Route path="/drive/:id" element={<DriveDetails />} />
  <Route path="/edit/:id" element={<MultiStepForm />} />
 </Routes>
  );
}

export default AppRoutes;