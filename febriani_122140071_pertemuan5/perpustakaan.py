# Sistem manajemen perpustakaan sederhana 

# Class untuk item perpustakaan
class LibraryItem:
    # Atribut yang dimiliki oleh semua item perpustakaan
    def __init__(self, item_id, title, publication_year):
        self.item_id = item_id
        self.title = title
        self.publication_year = publication_year

    def display_info(self):
        # Method kosong
        pass

# Class Book (turunan dari LibraryItem)
class Book(LibraryItem):
    def __init__(self, item_id, title, publication_year, author):
        super().__init__(item_id, title, publication_year)
        self.author = author # Atribut tambahan untuk buku

    def display_info(self):
        # Tampilkan informasi buku
        print(f"[Book] ID: {self.item_id}, Title: {self.title}, Year: {self.publication_year}, Author: {self.author}")

# Class Magazine (turunan dari LibraryItem)
class Magazine(LibraryItem):
    def __init__(self, item_id, title, publication_year, volume):
        super().__init__(item_id, title, publication_year)
        self.volume = volume # Atribut tambahan untuk majalah

    def display_info(self):
        # Tampilan informasi majalah
        print(f"[Magazine] ID: {self.item_id}, Title: {self.title}, Year: {self.publication_year}, Volume: {self.volume}")

# Class Library untuk mengelola koleksi item perpustakaan
class Library:
    def __init__(self):
        self.collection = [] # List untuk menyimpan item perpustakaan

    def add_item(self, item):
        # Menambahkan item ke koleksi perpustakaan
        self.collection.append(item)

    def show_items(self):
        # Menampilkan semua item di perpustakaan
        if not self.collection:
            print("\nBelum ada item di perpustakaan.")
        else:
            print("\nDaftar item di perpustakaan:")
            for item in self.collection:
                item.display_info() # Memanggil method display_info() untuk setiap item

library = Library() # Membuat objek Library

while True:
    # Menu utama
    print("\n=== Menu Perpustakaan ===")
    print("1. Tambah Buku")
    print("2. Tambah Majalah")
    print("3. Lihat Semua Item")
    print("4. Keluar")

    pilihan = input("Pilih menu (1/2/3/4): ") # Input pilihan menu
    print() # Baris kosong untuk pemisah

    if pilihan == "1":
        # Input data buku
        item_id = input("Masukkan ID buku: ")
        title = input("Masukkan judul buku: ")
        year = input("Masukkan tahun terbit: ")
        author = input("Masukkan nama penulis: ")

        # Membuat objek Book dan menambahkannya ke koleksi perpustakaan
        book = Book(item_id, title, year, author)
        library.add_item(book)
        print("Buku berhasil ditambahkan!")

    elif pilihan == "2":
        # Input data untuk majalah
        item_id = input("Masukkan ID majalah: ")
        title = input("Masukkan judul majalah: ")
        year = input("Masukkan tahun terbit: ")
        volume = input("Masukkan volume: ")

        # Buat objek Magazine dan menambahkannya ke koleksi perpustakaan
        magazine = Magazine(item_id, title, year, volume)
        library.add_item(magazine)
        print("Majalah berhasil ditambahkan!")

    elif pilihan == "3":
        # Tampilkan semua item di perpustakaan
        library.show_items()

    elif pilihan == "4":
        # Keluar dari program
        print("Terima kasih, program selesai.")
        break

    else:
        # Jika input tidak valid
        print("Pilihan tidak valid. Silakan pilih 1-4.")
