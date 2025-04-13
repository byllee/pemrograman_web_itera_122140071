import React, { useState } from "react";
import "../styles/NotesPage.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const NotesPage = () => {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });

  const [note, setNote] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (note.trim() === "") return;

    const updated = [...notes];

    if (editIndex !== null) {
      updated[editIndex].text = note;
    } else {
      const newNote = {
        text: note,
        date: new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };
      updated.push(newNote);
    }

    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
    setNote("");
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setNote(notes[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
    if (editIndex === index) {
      setNote("");
      setEditIndex(null);
    }
  };

  return (
    <div className="page">
      <h2>Catatan Keseharian</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Tulis catatan..."
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex !== null ? "Update Catatan" : "Tambah Catatan"}
      </button>

      {notes.length === 0 ? (
        <p style={{ color: "#6b7280", fontStyle: "italic", marginTop: "1rem" }}>
          Belum ada catatan.
        </p>
      ) : (
        <ul>
          {notes.map((n, index) => (
            <li key={index}>
              {n.text}
              <small>{n.date}</small>
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

export default NotesPage;
