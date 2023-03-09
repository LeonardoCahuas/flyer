import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Navbar} from "./components/Navbar"
import { Homepage } from "./pages/Homepage";
import { Teampage } from "./components/Teamsection";
import "./styles/index.css";
import "./styles/navbar.css";


export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>      
        <Route path="/" element={
         <div>
           <Navbar/>
           <Homepage/>
         </div>
       } />
        <Route path="/teampage" element={
         <div>
           <Navbar/>
           <Teampage/>
         </div>
       }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
}
