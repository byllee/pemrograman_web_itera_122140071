import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EditBook from '../pages/EditBook';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('renders EditBook page and handles form submission', async () => {
  const mockNavigate = jest.fn();
  const book = { id: 1, title: 'React for Beginners', author: 'John Doe', status: 'milik' };

  render(
    <MemoryRouter initialEntries={['/edit/1']}>
      <EditBook book={book} />
    </MemoryRouter>
  );

  // Ensure the form inputs are populated with the correct values
  expect(screen.getByDisplayValue('React for Beginners')).toBeInTheDocument();
  expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();

  // Simulate a user editing the book details
  fireEvent.change(screen.getByPlaceholderText('Judul'), { target: { value: 'React Advanced' } });
  fireEvent.change(screen.getByPlaceholderText('Penulis'), { target: { value: 'Jane Doe' } });

  // Simulate form submission
  fireEvent.click(screen.getByText('Simpan Perubahan'));

  // Ensure that the navigate function is called after form submission
  await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));

  // Optionally check if the updated values appear after submission
  expect(screen.getByDisplayValue('React Advanced')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Jane Doe')).toBeInTheDocument();
});
