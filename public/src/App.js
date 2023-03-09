import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AppPages } from "./components/AppPages";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppPages/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
}
