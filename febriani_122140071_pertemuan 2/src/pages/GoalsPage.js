import React, { useState } from "react";
import "../styles/GoalsPage.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const GoalsPage = () => {
  const [goals, setGoals] = useState(() => {
    const stored = localStorage.getItem("goals");
    return stored ? JSON.parse(stored) : [];
  });

  const [goal, setGoal] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (goal.trim() === "") return;

    const updated = [...goals];
    if (editIndex !== null) {
      updated[editIndex] = goal;
    } else {
      updated.push(goal);
    }

    setGoals(updated);
    localStorage.setItem("goals", JSON.stringify(updated));
    setGoal("");
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setGoal(goals[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = goals.filter((_, i) => i !== index);
    setGoals(updated);
    localStorage.setItem("goals", JSON.stringify(updated));
    if (editIndex === index) {
      setGoal("");
      setEditIndex(null);
    }
  };

  return (
    <div className="page">
      <h2>Target Harian</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Masukkan target..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update Target" : "Tambah Target"}
        </button>
      </div>
      {goals.length === 0 ? (
        <p className="empty-message">Belum ada target yang ditambahkan.</p>
      ) : (
        <ul className="target-list">
          {goals.map((g, index) => (
            <li key={index} className="target-item">
              {g}
              <div className="icons">
                <FaEdit className="icon edit" onClick={() => handleEdit(index)} />
                <FaTrash className="icon delete" onClick={() => handleDelete(index)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalsPage;
