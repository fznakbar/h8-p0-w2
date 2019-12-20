function xo(str) {
    var strX = 0;
    var strO = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            strX++
        } else {
            strO++
        }
    }
    if (strX === strO) {
        return true;
    } else {
        return false;
    }
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true