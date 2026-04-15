const mahasiswa = {
    Name     : 'Nur Ihwan Nauval',
    umur     : 20,
    jurusan  : 'Teknik Informatika',
    ipk      : 3.70,
    aktif    : true,
};

// --- 2. Mengakses property ---
console.log('=== Akses Property ===');
console.log('Nama    :', mahasiswa.Nama);
console.log('Umur    :', mahasiswa.umur);
console.log('Jurusan :', mahasiswa.jurusan);

// Bracket notation 
const keyYangDicari = 'ipk';
console.log('ipk    :', mahasiswa[keyYangDicari]);

// --- 3. Menambahkan dan mengubah property baru ---
mahasiswa.email  = 'nurihwannauval8105@gmail.com';
mahasiswa.umur   = 21;

console.log('\nSetelah diubah:', mahasiswa);

// --- 4. Menghapus property ---
delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

// --- 5. Menambahkan method ke object ---
const dosen = {
    Nama       : 'Dr. Siti Aminah',
    mk         : 'Struktur Data',
    pengalaman : 10,

    // method : function didalam object
    perkenalan() {
        return `Halo, saya ${this.Nama}, mengajar ${this.mk}.`;
    },

    statusSenior() {
        if (this.pengalaman >=10) {
            return `${this.Nama} adalah dosen senior.`;
        }
        return `${this.Nama} adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

// --- 6. Iterasi key-value dengan for...in ---
console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(` ${key} : ${dosen[key]}`)
    }
}

// Object key{}, Object.value{}, Object.entries{}
console.log('Keys   :', Object.keys(mahasiswa));
console.log('Values :', Object.values(mahasiswa));

// Latihan 1 :

// 1 & 2. Membuat object buku
const buku = {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahunTerbit: 2005,
    harga: 100000,
    tersedia: true,

    // 3. Method info()
    info: function () {
        return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    },

    // 4. Method diskon(persen)
    diskon: function (persen) {
        return this.harga * (1 - persen / 100);
    }
};

console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));


// 5. Array koleksiBuku (minimal 3 buku)
const koleksiBuku = [
    buku,
    {
        judul: "Bumi",
        pengarang: "Tere Liye",
        tahunTerbit: 2014,
        harga: 90000,
        tersedia: true,
        info() {
        return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
        }
    },
    {
        judul: "Negeri 5 Menara",
        pengarang: "Ahmad Fuadi",
        tahunTerbit: 2009,
        harga: 85000,
        tersedia: false,
        info() {
        return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
        }
    }
];


// 6. forEach untuk menampilkan semua buku
console.log("\n=== Semua Buku ===");
koleksiBuku.forEach((b) => {
    console.log(b.info());
});


// 7. filter untuk buku yang tersedia
const bukuTersedia = koleksiBuku.filter((b) => b.tersedia === true);

console.log("\n=== Buku Tersedia ===");
bukuTersedia.forEach((b) => {
    console.log(b.info());
});