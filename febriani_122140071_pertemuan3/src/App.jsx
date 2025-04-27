import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../src/pages/Home';
import AddBook from '../../src/pages/AddBook';
import EditBook from '../../src/pages/EditBook';
import BookList from '../../src/pages/BookList';  // Halaman daftar buku yang perlu dibuat
import NotFound from '../../src/pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Halaman Utama */}
          <Route path="/add" element={<AddBook />} /> {/* Halaman Tambah Buku */}
          <Route path="/edit/:id" element={<EditBook />} /> {/* Halaman Edit Buku */}
          <Route path="/booklist" element={<BookList />} /> {/* Halaman Daftar Buku */}
          <Route path="*" element={<NotFound />} /> {/* Halaman 404 jika rute tidak ditemukan */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
