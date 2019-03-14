function penjumlahan(){
    var komponen = document.calc;
    var bil1 = parseInt(komponen.bil1.value);
    var bil2 = parseInt(komponen.bil2.value); 
    var op = komponen.op.value;
    var hasil;
    hasil = bil1 + bil2;
    komponen.hasil.value = hasil;
}

function pengurangan(){
    var komponen = document.calc;
    var bil1 = parseInt(komponen.bil1.value);
    var bil2 = parseInt(komponen.bil2.value); 
    var op = komponen.op.value;
    var hasil;
    hasil = bil1 - bil2;
    komponen.hasil.value = hasil;
}

function perkalian(){
    var komponen = document.calc;
    var bil1 = parseInt(komponen.bil1.value);
    var bil2 = parseInt(komponen.bil2.value); 
    var op = komponen.op.value;
    var hasil;
    hasil = bil1 * bil2;
    komponen.hasil.value = hasil;
}

function pembagian(){
    var komponen = document.calc;
    var bil1 = parseInt(komponen.bil1.value);
    var bil2 = parseInt(komponen.bil2.value); 
    var op = komponen.op.value;
    var hasil;
    hasil = bil1 / bil2;
    komponen.hasil.value = hasil;
}

function bersih(){
var elemen = document.calc;

elemen.bil1.value = "";
elemen.bil2.value = "";
elemen.hasil.value = "";
}