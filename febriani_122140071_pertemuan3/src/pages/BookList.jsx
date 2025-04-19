import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import BookItem from '../components/BookItem';
import './BookList.css'; 

export default function BookList() {
  const { books, dispatch } = useBooks();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus buku ini?')) {
      dispatch({ type: 'DELETE_BOOK', payload: id });
    }
  };

  return (
    <div className="booklist-container">
      <h2>Katalog Buku Tersimpan</h2>
      {books.length === 0 ? (
        <p>Tidak ada buku tersimpan.</p>
      ) : (
        <div className="booklist-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <BookItem
                book={book}
                onEdit={() => navigate(`/edit/${book.id}`)}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
