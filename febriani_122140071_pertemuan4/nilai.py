class Mahasiswa:
    def __init__(self, nama, nim, nilai_uts, nilai_uas, nilai_tugas):
        self.nama = nama
        self.nim = nim
        self.nilai_uts = nilai_uts
        self.nilai_uas = nilai_uas
        self.nilai_tugas = nilai_tugas

    def hitung_nilai_akhir(self):
        # Menghitung nilai akhir/grade berdasarkan rumus yang diberikan
        return (0.3 * self.nilai_uts) + (0.4 * self.nilai_uas) + (0.3 * self.nilai_tugas)

    def tentukan_grade(self, nilai_akhir):
        if nilai_akhir >= 80:
            return 'A'
        elif 70 <= nilai_akhir < 80:
            return 'B'
        elif 60 <= nilai_akhir < 70:
            return 'C'
        elif 50 <= nilai_akhir < 60:
            return 'D'
        else:
            return 'E'

# Fungsi untuk meminta input mahasiswa dan data nilai
def input_mahasiswa():
    nama = input("Masukkan nama mahasiswa: ")
    nim = input("Masukkan NIM mahasiswa: ")
    nilai_uts = float(input("Masukkan nilai UTS: "))
    nilai_uas = float(input("Masukkan nilai UAS: "))
    nilai_tugas = float(input("Masukkan nilai Tugas: "))
    return Mahasiswa(nama, nim, nilai_uts, nilai_uas, nilai_tugas)

# Fungsi untuk menampilkan data mahasiswa dalam format tabel
def tampilkan_tabel(mahasiswa_list):
    print("\nData Mahasiswa:")
    print(f"{'Nama':<20}{'NIM':<15}{'Nilai Akhir':<15}{'Grade'}")
    print("-" * 60)

    for mhs in mahasiswa_list:
        nilai_akhir = mhs.hitung_nilai_akhir()
        grade = mhs.tentukan_grade(nilai_akhir)
        print(f"{mhs.nama:<20}{mhs.nim:<15}{nilai_akhir:<15.2f}{grade}")

    # Menampilkan mahasiswa dengan nilai tertinggi dan terendah
    max_mhs = max(mahasiswa_list, key=lambda x: x.hitung_nilai_akhir())
    min_mhs = min(mahasiswa_list, key=lambda x: x.hitung_nilai_akhir())

    print("\nMahasiswa dengan nilai tertinggi:")
    print(f"Nama: {max_mhs.nama}, NIM: {max_mhs.nim}, Nilai Akhir: {max_mhs.hitung_nilai_akhir():.2f}")
    print("Mahasiswa dengan nilai terendah:")
    print(f"Nama: {min_mhs.nama}, NIM: {min_mhs.nim}, Nilai Akhir: {min_mhs.hitung_nilai_akhir():.2f}")

# Program utama
def main():
    mahasiswa_list = []
    jumlah_mahasiswa = int(input("Masukkan jumlah mahasiswa: "))
    
    for _ in range(jumlah_mahasiswa):
        print("\nInput Data Mahasiswa:")
        mahasiswa = input_mahasiswa()
        mahasiswa_list.append(mahasiswa)
    
    tampilkan_tabel(mahasiswa_list)

# Menjalankan program utama
if __name__ == "__main__":
    main()
