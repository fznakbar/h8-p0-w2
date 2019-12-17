var tanggal = 19
var bulan = 4
var tahun = 1994
var tampungbulan = null

switch (bulan) {
    case 1:
        tampungbulan = 'Januari'
        break;
    case 2:
        tampungbulan = 'Februari'
        break;
    case 3:
        tampungbulan = 'Maret'
        break;
    case 4:
        tampungbulan = 'April'
        break;
    case 5:
        tampungbulan = 'Mei'
        break;
    case 6:
        tampungbulan = 'Juni'
        break;
    case 7:
        tampungbulan = 'Juli'
        break;
    case 8:
        tampungbulan = 'Agustus'
        break;
    case 9:
        tampungbulan = 'September'
        break;
    case 10:
        tampungbulan = 'Oktober'
        break;
    case 11:
        tampungbulan = 'November'
        break;
    case 12:
        tampungbulan = 'Desember'
        break;
}

if (tampungbulan < 1 || tampungbulan > 12) {
    console.log("Salah memasukkan bulan")
} else if (tanggal < 1 || tanggal > 31) {
    console.log("Salah memasukkan tanggal")
} else if (tahun < 1900 || tahun > 2020) {
    console.log("Salah memasukkan tahun")
} else {
    console.log(tanggal + ' ' + tampungbulan + ' ' + tahun)
}