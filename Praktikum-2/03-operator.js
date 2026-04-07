let a = 17;
let b = 5;

console.log('=== Aritmatika ===');
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

console.log('=== Perbandingan ===');
console.log('10 > 5     :', 10 > 5);
console.log('10 < 5     :', 10 < 5);
console.log('10 >= 10   :', 10 >= 10);
console.log('10 <= 10   :', 10<= 10);

console.log('--- Perbedaan == dan === ---');
console.log('5 == "5"   :', 5 == '5');
console.log('5 === "5"  :', 5 === '5');
console.log('5 !== 3    :', 5 !== 3);

console.log('=== Logika ===');
let sudahMakan  = true;
let punyaUang   = false;

console.log('Makan && Uang  :', sudahMakan && punyaUang);

console.log('Makan || Uang  :', sudahMakan || punyaUang);

console.log('!sudahMakan    :', !sudahMakan);
console.log('!punyaUang     :', !punyaUang);

// --- Latihan 1 ---

const panjang = 12;
const lebar = 8;

let Luas = panjang * lebar;
let keliling = 2 * (panjang * lebar);

console.log(`Luas Persegi panjang ${Luas}`);
console.log(`Keliling Persegi Panjang ${keliling}`)
let Lebih = true;
let Kurang = false;

if(Luas >= 100){
    console.log('Luas Lebih dari 100 :', Lebih);
}
else{
    console.log('Luas Kurang dari 100 :', Kurang);
}
if(keliling >= 100){
    console.log('Keliling Lebih dari 100 :', Lebih);
}
else{
    console.log('Keliling Kurang dari 100 :', Kurang);
}