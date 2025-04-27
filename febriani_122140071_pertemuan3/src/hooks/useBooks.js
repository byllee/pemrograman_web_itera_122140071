// src/hooks/useBooks.js
import { useState, useEffect } from 'react';

export default function useBooks() {
  const [books, setBooks] = useState([]);

  // Ambil dari localStorage saat pertama kali load
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  // Simpan setiap kali ada perubahan
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const dispatch = (action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        setBooks((prev) => [...prev, { id: Date.now(), ...action.payload }]);
        break;
      case 'DELETE_BOOK':
        setBooks((prev) => prev.filter((b) => b.id !== action.payload));
        break;
      case 'EDIT_BOOK':
        setBooks((prev) =>
          prev.map((b) => (b.id === action.payload.id ? action.payload : b))
        );
        break;
      default:
        break;
    }
  };

  return { books, dispatch };
}
