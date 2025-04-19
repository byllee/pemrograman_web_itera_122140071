import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from '../components/BookForm';

test('renders BookForm and handles submit', () => {
  const mockSubmit = jest.fn();
  render(<BookForm onSubmit={mockSubmit} />);

  const titleInput = screen.getByPlaceholderText('Judul');
  const authorInput = screen.getByPlaceholderText('Penulis');
  const submitButton = screen.getByText('Simpan Buku');

  fireEvent.change(titleInput, { target: { value: 'React for Beginners' } });
  fireEvent.change(authorInput, { target: { value: 'John Doe' } });
  fireEvent.click(submitButton);

  expect(mockSubmit).toHaveBeenCalledWith({
    title: 'React for Beginners',
    author: 'John Doe',
    status: 'milik',
  });
});
