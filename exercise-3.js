var nama = 'Zero'
var peran = 'Penyihir'

if (nama && peran === '') {
    console.log('Hallo ' + nama + ', Pilih peranmu untuk memulai game!')
} else if (nama && peran === 'Ksatria') {
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if (nama && peran === 'Tabib') {
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
} else if (nama && peran === 'Penyihir') {
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang akan membantu kemenanganmu!')
} else {
    console.log('Nama harus diisi!')
}