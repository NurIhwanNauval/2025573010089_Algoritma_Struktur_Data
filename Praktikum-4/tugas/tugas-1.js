class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        return `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`;
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah tidak valid");
            return;
        }

        if (jumlah > this.stok) {
            console.log(`Stok ${this.nama} tidak cukup`);
            return;
        }

        this.stok -= jumlah;
        console.log(`${jumlah} ${this.nama} berhasil dijual`);
    }
}

class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        return `${super.info()} | Ukuran: ${this.ukuranFile}MB | Format: ${this.formatFile}`;
    }

    download() {
        console.log(`${this.nama} sedang di-download...`);
    }

    jual(jumlah) {
        console.log(`${this.nama} adalah produk digital, stok tidak berkurang`);
    }
}

class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        return `${super.info()} | Berat: ${this.beratGram} gram | Dimensi: ${this.dimensi}`;
    }

    hitungOngkir(tarifPerKg) {
        return (this.beratGram / 1000) * tarifPerKg;
    }
}

// minimal 2 instance tiap class
const p1 = new ProdukDigital(1, "Ebook JS", 50000, 999, 20, "PDF");
const p2 = new ProdukDigital(2, "Template Web", 75000, 999, 15, "ZIP");

const p3 = new ProdukFisik(3, "Mouse", 120000, 10, 300, "10x5x3 cm");
const p4 = new ProdukFisik(4, "Keyboard", 250000, 5, 800, "40x15x4 cm");

const daftarProduk = [p1, p2, p3, p4];

// tampil semua info
console.log("=== Semua Produk ===");
daftarProduk.forEach(p => console.log(p.info()));

// filter produk tersedia
console.log("\n=== Produk Tersedia ===");
const tersedia = daftarProduk.filter(p => p.tersedia());
tersedia.forEach(p => console.log(p.nama));

// map nama produk
console.log("\n=== Nama Produk ===");
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);

// uji method
p1.download();
p3.jual(2);
console.log("Ongkir:", p3.hitungOngkir(10000));