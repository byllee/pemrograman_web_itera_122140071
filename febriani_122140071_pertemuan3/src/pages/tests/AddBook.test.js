import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddBook from '../pages/AddBook'; // Impor komponen AddBook
import { BrowserRouter as Router } from 'react-router-dom'; // Impor Router untuk navigasi

// Mock untuk useNavigate hook dari react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('renders AddBook page and handles form submission', async () => {
  const mockNavigate = jest.fn(); // Membuat fungsi mockNavigate untuk memantau navigasi

  // Render komponen AddBook dengan Router untuk menangani navigasi
  render(
    <Router>
      <AddBook />
    </Router>
  );

  // Memastikan elemen form input (judul dan penulis) muncul di halaman
  expect(screen.getByPlaceholderText('Judul')).toBeInTheDocument(); 
  expect(screen.getByPlaceholderText('Penulis')).toBeInTheDocument();

  // Simulasikan pengguna mengetikkan nilai di dalam input "Judul"
  fireEvent.change(screen.getByPlaceholderText('Judul'), { target: { value: 'React for Beginners' } });

  // Simulasikan pengguna mengetikkan nilai di dalam input "Penulis"
  fireEvent.change(screen.getByPlaceholderText('Penulis'), { target: { value: 'John Doe' } });

  // Simulasikan klik pada tombol "Simpan Buku"
  fireEvent.click(screen.getByText('Simpan Buku'));

  // Menunggu hingga navigasi berhasil terjadi setelah form disubmit
  await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));

  // Memastikan bahwa setelah form disubmit, nilai input akan dikosongkan
  expect(screen.getByPlaceholderText('Judul')).toHaveValue('');
  expect(screen.getByPlaceholderText('Penulis')).toHaveValue('');
});
