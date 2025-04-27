import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Home page and handles search', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  // Ensure the search bar is rendered
  expect(screen.getByPlaceholderText('Cari judul buku...')).toBeInTheDocument();

  // Simulate a user typing into the search bar
  fireEvent.change(screen.getByPlaceholderText('Cari judul buku...'), { target: { value: 'React' } });

  // Check if the search term is being updated
  expect(screen.getByPlaceholderText('Cari judul buku...')).toHaveValue('React');
});
