import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useBooks from '../hooks/useBooks'; // Mengambil hook untuk mengelola buku
import BookForm from '../components/BookForm';
import './EditBook.css';

export default function EditBook() {
  const { id } = useParams(); // Mengambil ID buku dari URL
  const { books, dispatch } = useBooks(); // Menggunakan hook untuk mendapatkan buku dan dispatch
  const navigate = useNavigate();

  const [book, setBook] = useState(null);

  useEffect(() => {
    // Mengambil data buku berdasarkan ID yang ada di URL
    const bookToEdit = books.find((book) => book.id === id);
    if (bookToEdit) {
      setBook(bookToEdit); // Set data buku yang akan diedit
    } else {
      navigate('/'); // Jika buku tidak ditemukan, arahkan kembali ke halaman utama
    }
  }, [id, books, navigate]); // Mengupdate jika ID atau daftar buku berubah

  const handleEditBook = (bookData) => {
    // Menyimpan perubahan buku
    const updatedBook = { ...book, ...bookData }; // Menggabungkan data buku lama dengan data yang baru

    // Dispatch aksi untuk memperbarui buku
    dispatch({ type: 'UPDATE_BOOK', payload: updatedBook });
    navigate('/'); // Arahkan kembali ke halaman utama setelah mengedit
  };

  return (
    <div className="edit-book-container">
      <h2>Edit Buku</h2>
      {book ? (
        <BookForm onSubmit={handleEditBook} initialData={book} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
