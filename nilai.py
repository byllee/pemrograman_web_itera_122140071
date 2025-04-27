class Mahasiswa:
    def __init__(self, nama, nim, nilai_uts, nilai_uas, nilai_tugas):
        self.nama = nama
        self.nim = nim
        self.nilai_uts = nilai_uts
        self.nilai_uas = nilai_uas
        self.nilai_tugas = nilai_tugas
        self.nilai_akhir = self.hitung_nilai_akhir()
        self.grade = self.tentukan_grade()

    def hitung_nilai_akhir(self):
        return (self.nilai_uts * 0.3) + (self.nilai_uas * 0.4) + (self.nilai_tugas * 0.3)
    
    def tentukan_grade(self):
        if self.nilai_akhir >= 80:
            return 'A'
        elif self.nilai_akhir >= 70:
            return 'B'
        elif self.nilai_akhir >= 60:
            return 'C'
        elif self.nilai_akhir >= 50:
            return 'D'
        else:
            return 'E'
        
    @staticmethod
    def tampilkan_info(mahasiswa_list):
        print(f"{'Nama':<15} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade'}")
        print("-" * 70)
        for mhs in mahasiswa_list:
            print(f"{mhs.nama:<15} {mhs.nim:<10} {mhs.nilai_uts:<5} {mhs.nilai_uas:<5} {mhs.nilai_tugas:<7} {mhs.nilai_akhir:<7.2f} {mhs.grade}")

    @staticmethod
    def cari_tertinggi_terendah(mahasiswa_list):
        if not mahasiswa_list:
            return None, None
        tertinggi = max(mahasiswa_list, key=lambda mhs: mhs.nilai_akhir)
        terendah = min(mahasiswa_list, key=lambda mhs: mhs.nilai_akhir)
        print("\nMahasiswa dengan nilai tertinggi:")
        print(f"{tertinggi.nama} ({tertinggi.nim}) - Nilai Akhir: {tertinggi.nilai_akhir:.2f} - Grade: {tertinggi.grade}")
        print("\nMahasiswa dengan nilai terendah:")
        print(f"{terendah.nama} ({terendah.nim}) - Nilai Akhir: {terendah.nilai_akhir:.2f} - Grade: {terendah.grade}")

# Contoh data mahasiswa
data_mahasiswa = [
    Mahasiswa("John Doe", "123456", 85, 90, 80),
    Mahasiswa("Jane Smith", "654321", 75, 80, 70),
    Mahasiswa("Alice Brown", "112233", 60, 65, 70),
    Mahasiswa("Bob Johnson", "445566", 50, 55, 60),
    Mahasiswa("Charlie White", "778899", 90, 95, 85),
    Mahasiswa("Diana Prince", "998877", 88, 92, 85),
    Mahasiswa("Ethan Hunt", "556677", 70, 75, 80),
    Mahasiswa("Felicity Smoak", "334455", 65, 70, 75),
    Mahasiswa("George Clooney", "223344", 80, 85, 90),
    Mahasiswa("Hannah Montana", "667788", 55, 60, 65),
]

# Menampilkan data dan hasil 
Mahasiswa.tampilkan_info(data_mahasiswa)
Mahasiswa.cari_tertinggi_terendah(data_mahasiswa)
