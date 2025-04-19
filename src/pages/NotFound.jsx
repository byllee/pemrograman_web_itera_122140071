import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak ada. Silakan kembali ke halaman utama.</p>
      <button onClick={() => navigate('/')}>Kembali ke Beranda</button>
    </div>
  );
}
