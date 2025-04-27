import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SchedulePage from "./pages/SchedulePage";
import NotesPage from "./pages/NotesPage";
import GoalsPage from "./pages/GoalsPage"; // ← Tambahan

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jadwal" element={<SchedulePage />} />
        <Route path="/catatan" element={<NotesPage />} />
        <Route path="/target" element={<GoalsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
