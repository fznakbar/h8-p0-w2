// NUMBER 1

var tulisan = 'I love coding';
var tulisan2 = 'I will become fullstack developer';
var angka = 2;
console.log('LOOPING PERTAMA');
while (angka <= 20) {
    console.log(angka + ' - ' + tulisan);
    angka += 2;
}
angka -= 2;
console.log('LOOPING KEDUA');
while (angka >= 2) {
    console.log(angka + ' - ' + tulisan2);
    angka -= 2;
}


// NUMBER 2

var tulisan = 'I love coding';
var tulisan2 = 'I will become fullstack developer';
var angka = 2;
console.log('LOOPING PERTAMA');
for (angka = 2; angka <= 20; angka++) {
    console.log(angka + ' - ' + tulisan)
}
console.log('LOOPING KEDUA');
for (angka = 20; angka >= 2; angka--) {
    console.log(angka + ' - ' + tulisan2);
}


// NUMBER 3

//var number = 1;

for (number = 1; number <= 100; number++) {
    if (number % 2 == 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

// KELIPATAN 3

for (number = 1; number <= 100; number += 2) {
    if (number % 3 == 0) {
        console.log(number + ' KELIPATAN 3');
    }
}

// KELIPATAN 6

for (number = 1; number <= 100; number += 5) {
    if (number % 6 == 0) {
        console.log(number + ' KELIPATAN 6');
    }
}

// KELIPATAN 10

for (number = 1; number <= 100; number += 9) {
    if (number % 10 == 0) {
        console.log(number + ' KELIPATAN 10');
    }
}