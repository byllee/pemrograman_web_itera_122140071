import { render, screen, fireEvent } from '@testing-library/react';
import BookItem from '../components/BookItem';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders BookItem component and handles delete', () => {
  const book = { id: 1, title: 'React for Beginners', author: 'John Doe', status: 'milik' };
  const mockDelete = jest.fn();

  render(
    <Router>
      <BookItem book={book} onDelete={mockDelete} />
    </Router>
  );

  // Check if the book title and author are displayed
  expect(screen.getByText('React for Beginners')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();

  // Simulate delete button click
  fireEvent.click(screen.getByText('Hapus'));

  // Ensure the delete function is called with the correct book ID
  expect(mockDelete).toHaveBeenCalledWith(book.id);
});
