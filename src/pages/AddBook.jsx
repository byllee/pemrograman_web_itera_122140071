// src/pages/AddBook.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import useBooks from '../hooks/useBooks';
import './AddBook.css';

export default function AddBook() {
  const [error, setError] = useState('');
  const { books, dispatch } = useBooks();
  const navigate = useNavigate();

  const handleSubmit = (bookData) => {
    // Validasi untuk memastikan judul dan penulis tidak kosong
    if (!bookData.title || !bookData.author) {
      setError('Judul dan Penulis wajib diisi');
      return;
    }

    const newBook = {
      id: Date.now().toString(), // Menggunakan timestamp sebagai ID unik
      title: bookData.title,
      author: bookData.author,
      status: bookData.status,
    };

    // Menambahkan buku ke state dan localStorage
    dispatch({ type: 'ADD_BOOK', payload: newBook });
    
    // Mengarahkan ke halaman daftar buku setelah menambahkan
    navigate('/booklist');
  };

  return (
    <div className="add-book-container">
      <h2>Tambah Buku</h2>
      <BookForm onSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}
