//--- 1. Membuat array
const mahasiswa = ['Budi', 'Siti', 'Ahmad', 'Rina'];
const nilai = [85, 90, 78, 95, 88];
console.log('=== Array Awal ===');
console.log('Mahasiswa:', mahasiswa);
console.log('Nilai :', nilai);
console.log('Jumlah mahasiswa:', mahasiswa.length);

// --- 2. Mengakses elemen 
console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama :', mahasiswa[0]); // indeks 0
console.log('Elemen ketiga :', mahasiswa[2]); // indeks 2
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]);

// --- 3. Mengubah elemen 
mahasiswa[1] = 'Siti Rahayu'; // ubah elemen indeks 1
console.log('\nSetelah diubah:', mahasiswa);

// --- 4. Menambah dan menghapus elemen 
console.log('\n=== Manipulasi Array ===');
mahasiswa.push('Doni'); // tambah di akhir
console.log('Setelah push :', mahasiswa);
mahasiswa.unshift('Zahra'); // tambah di awal
console.log('Setelah unshift :', mahasiswa);
const dihapusAkhir = mahasiswa.pop(); // hapus dari akhir
console.log('Dihapus (pop) :', dihapusAkhir);
console.log('Setelah pop :', mahasiswa);
const dihapusAwal = mahasiswa.shift(); // hapus dari awal
console.log('Dihapus (shift) :', dihapusAwal);
console.log('Setelah shift :', mahasiswa);

// --- 5. Mencari elemen 
console.log('\n=== Pencarian ===');
console.log('Indeks Ahmad :', mahasiswa.indexOf('Ahmad'));
console.log('Ada Rina? :', mahasiswa.includes('Rina'));
console.log('Ada Budi? :', mahasiswa.includes('Budi'));

// --- 6. Mengiris array dengan slice 
const sebagian = nilai.slice(1, 4); // dari indeks 1 sampai sebelum 4
console.log('\nNilai asli :', nilai);
console.log('Slice [1,4] :', sebagian);

//Latihan 3 

console.log("\n=== Manajemen Daftar Belanja ===");

// 1 & 2. Membuat array dengan 5 item
let daftarBelanja = ["Beras", "Gula", "Minyak Goreng", "Telur", "Kopi"];

// 3. Menampilkan isi daftar dengan nomor urut
console.log("\nDaftar Belanja Awal:");

for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

// 4. Menambahkan 2 item baru di akhir
daftarBelanja.push("Susu");
daftarBelanja.push("Roti");

console.log("\nSetelah menambahkan 2 item baru:");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

// 5. Menghapus item pertama
let itemDihapus = daftarBelanja.shift();

console.log("\nItem yang dihapus dari awal:", itemDihapus);

// 6. Mengecek apakah 'Susu' ada
let cekSusu = daftarBelanja.includes("Susu");

console.log('\nApakah "Susu" ada di daftar?');

if (cekSusu) {
    console.log("Ya, Susu ada di daftar belanja.");
} else {
    console.log("Tidak, Susu tidak ada di daftar belanja.");
}

// 7. Menampilkan jumlah item akhir
console.log("\nJumlah item akhir di daftar:", daftarBelanja.length);