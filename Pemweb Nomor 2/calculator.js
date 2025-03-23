function sapaNama(nama) {
    return `Halo, ${nama}! Selamat belajar!`;
}

// Event handler untuk tombol sapa
document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-red-500">Masukkan nama Anda terlebih dahulu!</p>`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-green-500">${pesan}</p>`;
    }
});

// Fungsi untuk kalkulator dengan operasi tambahan
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        case "pangkat":
            hasil = Math.pow(angka1, angka2);
            break;
        case "akar":
            if (angka1 < 0) {
                return "Error: Akar kuadrat dari bilangan negatif tidak diperbolehkan";
            }
            hasil = Math.sqrt(angka1);
            break;
        case "mod":
            hasil = angka1 % angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

document.getElementById("btn-pangkat").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML =
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "pangkat");
        document.getElementById("hasil-kalkulator").innerHTML =
            `<p>Hasil: ${angka1} ^ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-akar").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);

    if (isNaN(angka1)) {
        document.getElementById("hasil-kalkulator").innerHTML =
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, 0, "akar");
        document.getElementById("hasil-kalkulator").innerHTML =
            `<p>Hasil: √${angka1} = ${hasil}</p>`;
    }
});

document.getElementById("btn-mod").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML =
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "mod");
        document.getElementById("hasil-kalkulator").innerHTML =
            `<p>Hasil: ${angka1} % ${angka2} = ${hasil}</p>`;
    }
});
