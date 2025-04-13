import React, { useState, useEffect } from "react";
import "../styles/SchedulePage.css";

class Schedule {
  constructor(day, subject) {
    this.day = day;
    this.subject = subject;
  }
}

const SchedulePage = () => {
  const [schedule, setSchedule] = useState(() => {
    const stored = localStorage.getItem("schedule");
    return stored ? JSON.parse(stored) : [];
  });

  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");

  const handleAdd = () => {
    if (day && subject) {
      const newItem = new Schedule(day, subject);
      const updated = [...schedule, newItem];
      setSchedule(updated);
      localStorage.setItem("schedule", JSON.stringify(updated));
      setDay("");
      setSubject("");
    }
  };

  const handleDelete = (index) => {
    const updated = schedule.filter((_, i) => i !== index);
    setSchedule(updated);
    localStorage.setItem("schedule", JSON.stringify(updated));
  };

  return (
    <div className="schedule-container">
      <h2>Jadwal Kuliah</h2>
      <div className="form-container">
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Hari"
          className="input-field"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Mata Kuliah"
          className="input-field"
        />
        <button onClick={handleAdd} className="add-button">
          Tambah Jadwal
        </button>
      </div>
      <ul className="schedule-list">
        {schedule.map((item, index) => (
          <li key={index} className="schedule-item">
            {`${item.day}: ${item.subject}`}
            <button onClick={() => handleDelete(index)} className="delete-button">
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulePage;
