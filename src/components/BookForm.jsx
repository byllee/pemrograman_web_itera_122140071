import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

export default function BookForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [status, setStatus] = useState(initialData.status || 'milik');
  const [error, setError] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      setError({
        title: !title ? 'Judul wajib diisi' : '',
        author: !author ? 'Penulis wajib diisi' : '',
      });
      return;
    }

    onSubmit({ title, author, status });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <label>
        Judul:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {error.title && <div className="error">{error.title}</div>}
      </label>
      <label>
        Penulis:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {error.author && <div className="error">{error.author}</div>}
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="milik">Milik</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </label>
      <button type="submit">Simpan Buku</button>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};
