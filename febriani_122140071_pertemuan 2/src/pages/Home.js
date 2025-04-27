import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [noteCount, setNoteCount] = useState(0);
  const [scheduleCount, setScheduleCount] = useState(0);
  const [goalCount, setGoalCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const schedule = JSON.parse(localStorage.getItem("schedule")) || [];
    const goals = JSON.parse(localStorage.getItem("goals")) || [];

    setNoteCount(notes.length);
    setScheduleCount(schedule.length);
    setGoalCount(goals.length);
  }, []);

  const goTo = (path) => navigate(path);

  const greeting = () => {
    const hour = new Date().getHours();
    return hour < 12 ? "Selamat pagi ☀️" : hour < 18 ? "Selamat siang 🌤️" : "Selamat malam 🌙";
  };

  return (
    <div className="home-container">
      <h2>{`${greeting()}, selamat datang di RuangSunyi!`}</h2>
      <div className="homebar">
        <div className="card" onClick={() => goTo("/catatan")}>
          <h3>Catatan</h3>
          <p>{noteCount} catatan</p>
        </div>
        <div className="card" onClick={() => goTo("/jadwal")}>
          <h3>Jadwal Kuliah</h3>
          <p>{scheduleCount} jadwal</p>
        </div>
        <div className="card" onClick={() => goTo("/target")}>
          <h3>Target</h3>
          <p>{goalCount} target</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
