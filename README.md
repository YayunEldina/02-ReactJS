<table>
    <thead>
        <tr>
            <th style="text-align: center;" colspan="2">Pertemuan 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Nama :</strong></td>
            <td>Yayun Eldina</td>
        </tr>
        <tr>
            <td><strong>NIM :</strong></td>
            <td>2241720065</td>
        </tr>
    </tbody>
</table>

---

# **Laporan Praktikum ReactJS**

## **Langkah-langkah Praktikum**

### **1. Persiapan Lingkungan**
1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt:
   ```sh
   node -v
   npm -v
   ```
   <img src="img/1.png">


2. Buat direktori baru untuk proyek React Anda:
   ```sh
   mkdir proyek-react
   cd proyek-react
   ```
    <img src="img/2.png">

     <img src="img/2,.png">

3. Inisialisasi proyek React dengan menjalankan perintah berikut:
   ```sh
   npx create-react-app my-app
   cd my-app
   ```
    <img src="img/3.png">

    <img src="img/3,.png">

    <img src="img/3..png">

4. Jalankan aplikasi React dengan perintah:
   ```sh
   npm start
   ```
   Aplikasi akan terbuka di browser pada alamat **http://localhost:3000/**.
   <img src="img/4.png">

   <img src="img/4,.png">

---

### **2. Membuat Komponen React**
1. Buka file `src/App.js` di text editor Anda.
2. Ganti kode di dalamnya dengan kode berikut untuk membuat komponen sederhana:
   
   <img src="img/2.2.png">

   <img src="img/2.2,.png">

3. Simpan file dan lihat perubahan di browser. Anda akan melihat tampilan sederhana dengan header dan konten utama.

    <img src="img/2.3.png">
---

### **3. Menggunakan JSX untuk Membuat Komponen Dinamis**
1. Buat file baru di direktori `src` dengan nama `Counter.js`.
2. Tambahkan kode berikut untuk membuat komponen Counter yang dinamis:
   
   <img src="img/3.2.png">

3. Buka file `src/App.js` dan impor komponen Counter:
   
   <img src="img/3.3.png">

4. Tambahkan komponen Counter ke dalam komponen App:
    
    <img src="img/3.4.png">

5. Simpan file dan lihat perubahan di browser. Anda akan melihat tombol **"Tambah"** yang dapat meningkatkan hitungan saat diklik.

    <img src="img/3.5.png">

---

### **4. Menggunakan Props untuk Mengirim Data**
1. Buat file baru di direktori `src` dengan nama `Greeting.js`.
2. Tambahkan kode berikut untuk membuat komponen Greeting yang menerima props:

    <img src="img/4.2.png">

3. Buka file `src/App.js` dan impor komponen Greeting:
   
    <img src="img/4.3.png">

4. Tambahkan komponen Greeting ke dalam komponen App dan kirim props `name`:

    <img src="img/4.4.png">

5. Simpan file dan lihat perubahan di browser. Anda akan melihat pesan **"Halo, John!"** yang ditampilkan oleh komponen Greeting.

     <img src="img/4.5.png">

---

### **5. Menggunakan State untuk Mengelola Data**
1. Buka file `src/App.js` dan tambahkan kode berikut untuk membuat komponen yang mengelola state:

     <img src="img/5.1.png">

2. Tambahkan komponen Example ke dalam komponen App:

     <img src="img/5.2.png">

3. Simpan file dan lihat perubahan di browser. Anda akan melihat form input yang dapat mengupdate state dan menampilkan data yang dimasukkan.

     <img src="img/5.3.png">
---

## **Tugas**

1. **Buat komponen baru bernama `TodoList` yang menampilkan daftar tugas (todo list).**
   - Gunakan state untuk mengelola daftar tugas dan props untuk mengirim data tugas ke komponen anak.

    <img src="img/T1.png">

2. **Tambahkan fitur untuk menambahkan tugas baru ke dalam daftar menggunakan form input.**

    <img src="img/T2.png">

    <img src="img/T2,.png">

3. **Implementasikan fitur untuk menghapus tugas dari daftar.**

    <img src="img/T3.png">

    <img src="img/T3,.png">

**Bukti Screenshot Hasil Implementasi:**

  <img src="img/Hasil.png">
