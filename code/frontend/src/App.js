import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Containers/LandingPage";
import AdminDash from "./Containers/AdminDashboard";
import EmployerDash from "./Containers/EmployerDashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="employer" element={<EmployerDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
