// NUMBER 1


var rows1 = 5;
var i;
for (i = 1; i <= rows1; i++) {
    console.log('*')
}


// NUMBER 2


var rows2 = 5
var i;
var j;
var tampung;
for (i = 1; i <= rows2; i++) {
    tampung = ''
    for (j = 1; j <= rows2; j++) {
        tampung += '*';
    }
    console.log(tampung)
}


// NUMBER 3


var rows2 = 5
var i;
var j;
var tampung;
for (i = 1; i <= rows2; i++) {
    tampung = ''
    for (j = 1; j <= i; j++) {
        tampung += '*'
    }
    console.log(tampung);
}