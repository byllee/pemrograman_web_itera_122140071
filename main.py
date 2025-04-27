import math_operations
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

def main():
    print("=== Perhitungan Bangun Datar dan Konversi Suhu ===\n")

    #Input untuk persegi
    sisi = float(input("Masukkan sisi persegi: "))
    print(f"Luas Persegi: {math_operations.luas_persegi(sisi)}")
    print(f"Keliling Persegi: {math_operations.keliling_persegi(sisi)}\n")

    #Input untuk persegi panjang
    panjang = float(input("Masukkan panjang persegi panjang: "))
    lebar = float(input("Masukkan lebar persegi panjang: "))
    print(f"Luas Persegi Panjang: {math_operations.luas_persegi_panjang(panjang, lebar)}")
    print(f"Keliling Persegi Panjang: {math_operations.keliling_persegi_panjang(panjang, lebar)}\n")

    #Input untuk lingkaran
    jari_jari = float(input("Masukkan jari-jari lingkaran: "))
    print(f"Luas Lingkaran: {math_operations.luas_lingkaran(jari_jari):.2f}")
    print(f"Keliling Lingkaran: {math_operations.keliling_lingkaran(jari_jari):.2f}\n")

    #Input untuk suhu dengan penanganan error
    while True:
        try:
            suhu_celsius = float(input("Masukkan suhu dalam Celsius: "))
            break  
        except ValueError:
            print("Input tidak valid. Harap masukkan angka yang benar dalam derajat celsius.")

    print(f"{suhu_celsius}°C ke Fahrenheit: {celsius_ke_fahrenheit(suhu_celsius):.2f}°F")
    print(f"{suhu_celsius}°C ke Kelvin: {celsius_ke_kelvin(suhu_celsius):.2f}K")

