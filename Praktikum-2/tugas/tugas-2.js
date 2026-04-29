const BeratBadan = 68;
const TinggiBadan = 1.72;

let bmi = BeratBadan/(TinggiBadan * TinggiBadan);

let kategori;
if(bmi < 18.5){
    kategori = "Kurus";
}
else if (bmi >= 18.5 && bmi <= 24.9){
    kategori="Normal";
}
else if (bmi >= 25.0 && bmi <=29.9){
    kategori="Kelebihan Berat Badan";
}
else{
    kategori ="Obesitas";
}

console.log(`Berat Badan :  ${BeratBadan} kg | Tinggi Badan :   ${TinggiBadan} m | BMI : 
    ${bmi.toFixed(2)} Kategori : ${kategori}`);