import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import BookItem from '../components/BookItem';
import './Home.css';

export default function Home() {
  const { books, dispatch } = useBooks();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('semua');
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus buku ini?')) {
      dispatch({ type: 'DELETE_BOOK', payload: id });
    }
  };

  // Filter berdasarkan pencarian dan status
  const filteredBooks = books.filter((book) => {
    const matchSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filter === 'semua' || book.status === filter;
    return matchSearch && matchFilter;
  });

  // Arahkan ke halaman tambah buku jika pencarian kosong dan tidak ada hasil
  useEffect(() => {
    if (searchTerm && filteredBooks.length === 0) {
      const timer = setTimeout(() => {
        alert('Buku tidak ditemukan. Mengarahkan ke halaman tambah buku...');
        navigate('/add');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [filteredBooks, searchTerm, navigate]);

  return (
    <div className="home-container">
      <h2>Daftar Buku Saya</h2>

      <div className="home-controls">
        <input
          type="text"
          placeholder="Cari judul..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option disabled value="">Status</option>
          <option value="semua">Semua</option>
          <option value="milik">Milik</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
        <button onClick={() => navigate('/add')}>+ Tambah Buku</button>
        {/* Tombol untuk melihat daftar buku yang telah disimpan */}
        <button onClick={() => navigate('/booklist')}>Lihat Buku</button>
      </div>

      {/* Tampilkan daftar buku */}
      {filteredBooks.length === 0 ? (
        <p className="empty-text">Tidak ada buku ditemukan.</p>
      ) : (
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
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
