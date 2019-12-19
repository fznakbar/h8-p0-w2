// NUMBER 1


function shoutOut() {
    return 'Halo Function!'
}
console.log(shoutOut())


// NUMBER 2


function calculateMultiply(number1, number2) {
    hasilPerkalian = number1 * number2
}
var num1 = 5;
var num2 = 6;
var hasilperkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);


// NUMBER 3


function processSentence(nama, umur, alamat, hobi) {
    return 'Nama saya ' + nama + ', umur saya ' + umur + ' tahun, alamat saya di ' + alamat + ', dan saya punya hobby yaitu ' + hobi + '!'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);