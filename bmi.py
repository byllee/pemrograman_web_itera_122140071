class BMI:
    def __init__(self, berat, tinggi):
        self.berat = berat          
        self.tinggi = tinggi 

    def hitung_bmi(self):
        bmi = self.berat / (self.tinggi ** 2)
        return bmi
    
    def kategori_bmi(self):
        bmi = self.hitung_bmi()
        if bmi < 18.5:
            return "Anda kekurangan berat badan (underweight)"
        elif 18.5 <= bmi < 25:
            return "Berat badan Anda normal(ideal)"
        elif 25 <= bmi < 30:
            return "Berat badan Anda berlebih (kegemukan)"
        else:
            return "Kegemukan (obesitas)"
        
    def tampilkan_hasil(self):
        bmi = self.hitung_bmi()
        kategori = self.kategori_bmi()
        print(f"Berat badan Anda: {self.berat} kg")
        print(f"Tinggi badan Anda: {self.tinggi} m")
        print(f"Indeks Massa Tubuh (BMI) Anda: {bmi:.2f}")
        print(kategori)

if __name__ == "__main__":
    berat = float(input("Masukkan berat badan Anda: "))
    tinggi = float(input("Masukkan tinggi badan Anda: "))
    
    bmi = BMI(berat, tinggi)
    bmi.tampilkan_hasil()