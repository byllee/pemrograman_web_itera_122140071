import React from 'react';
import PropTypes from 'prop-types';
import './BookItem.css';

function BookItem({ book, onEdit, onDelete }) {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>Status: {book.status}</p>
      <button onClick={() => onEdit(book.id)}>Edit</button>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookItem;
