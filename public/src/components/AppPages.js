import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Navbar } from "../components/Navbar";
import { Teampage } from "../components/Teamsection";

import "../styles/index.css";
import "../styles/navbar.css";

export function AppPages() {
  return (
    <div className="bg-base-300 min-h-screen">
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="teampage" element={<Teampage />} />
      </Routes>
    </div>
  );
}
