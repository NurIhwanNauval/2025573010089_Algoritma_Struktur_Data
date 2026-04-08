console.log("=== Pangkat dan Palindrom Rekursif ===");

// 2. Function rekursif pangkat(basis, eksponen)
function pangkat(basis, eksponen) {
    // Base case
    if (eksponen === 0) {
        return 1;
    }

    // Recursive case
    return basis * pangkat(basis, eksponen - 1);
}

// Uji function pangkat
console.log("\n=== Uji Fungsi Pangkat ===");
console.log(`2 pangkat 3 = ${pangkat(2, 3)}`);
console.log(`5 pangkat 2 = ${pangkat(5, 2)}`);
console.log(`3 pangkat 4 = ${pangkat(3, 4)}`);

// 3. Function rekursif balikString(str)
function balikString(str) {
    // Base case
    if (str.length <= 1) {
        return str;
    }

    // Recursive case
    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// Uji balikString
console.log("\n=== Uji Fungsi Balik String ===");
console.log(`'halo' dibalik menjadi '${balikString("halo")}'`);
console.log(`'javascript' dibalik menjadi '${balikString("javascript")}'`);

// 4. Function cekPalindrom(str)
function cekPalindrom(str) {
    const hasilBalik = balikString(str);

    if (str === hasilBalik) {
        return true;
    } else {
        return false;
    }
}

// Uji cekPalindrom (minimal 4 kata)
console.log("\n=== Uji Cek Palindrom ===");

const kataUji = ["katak", "civic", "level", "halo"];

kataUji.forEach((kata) => {
    if (cekPalindrom(kata)) {
        console.log(`${kata} adalah palindrom`);
    } else {
        console.log(`${kata} bukan palindrom`);
    }
});