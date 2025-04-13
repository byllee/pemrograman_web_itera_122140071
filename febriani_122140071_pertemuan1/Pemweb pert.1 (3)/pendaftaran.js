document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Mengambil nilai input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mengatur pesan error
    let valid = true;
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Validasi nama
    if (name.length <= 3) {
        document.getElementById('nameError').textContent = 'Nama harus lebih dari 3 karakter.';
        valid = false;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email tidak valid.';
        valid = false;
    }

    // Validasi password
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password harus minimal 8 karakter.';
        valid = false;
    }

    // Jika semua validasi berhasil
    if (valid) {
        document.getElementById('successMessage').textContent = 'Form berhasil dikirim!';
    
    }
});