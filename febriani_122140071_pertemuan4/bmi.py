class BMI:
    def __init__(self, berat, tinggi):
        self.berat = berat
        self.tinggi = tinggi

    def hitung_bmi(self):
        return self.berat / (self.tinggi ** 2)

    def kategori_bmi(self, bmi):
        if bmi < 18.5:
            return "Berat badan kurang"
        elif 18.5 <= bmi < 25:
            return "Berat badan normal"
        elif 25 <= bmi < 30:
            return "Berat badan berlebih"
        else:
            return "Obesitas/kelebihan berat badan"

    def tampilkan_hasil(self):
        bmi = self.hitung_bmi()
        kategori = self.kategori_bmi(bmi)
        print(f"\nBMI Anda adalah: {bmi:.2f}")
        print(f"Kategori BMI: {kategori}")


# Input dari pengguna
berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (m): "))

bmi_calculator = BMI(berat, tinggi)

# Menampilkan hasil perhitungan BMI
bmi_calculator.tampilkan_hasil()
