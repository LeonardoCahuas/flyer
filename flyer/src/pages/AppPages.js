import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Navbar } from "../components/Navbar";
import { Teampage } from "./Teampage";

import "../styles/index.css";
import "../styles/navbar.css";

export function AppPages() {
  return (
    <div className="bg-base-300">
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="teampage" element={<Teampage />} />
      </Routes>
    </div>
  );
}
