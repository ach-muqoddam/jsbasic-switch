// bagaimana menentukan hari dari tanggal saat ini
let cekDate = new Date()
let Day = new Date().getDay()
let cekDay = Day;

switch(cekDay){
    case 0:
        cekDay = 'Minggu'
        break
    case 1:
        cekDay = 'Senin'
        break
    case 2:
        cekDay = 'Selasa'
        break
    case 3:
        cekDay = 'Rabu'
        break
    case 4:
        cekDay = 'Kamis'
        break
    case 5:
        cekDay = 'Jumat'
        break
    case 6:
        cekDay = 'Sabtu'
        break
    default:
        cekDay = 'Hari tidak ditemukan'
}

alert(`Tanggal Saat ini adalah ${cekDate}`)
alert(`Hari ini adalah hari ${Day}`)
alert(`Hari ${Day} itu adalah hari ${cekDay}`)