let tanggal = 17; let bulan = 5; let tahun = 2015;


switch(tanggal) {
    case tanggal > 0 || tanggal < 32 :
        console.log(`input hari yanng benar`)
        break;
}

switch(bulan) {
    case 1:
        bulan = "januari";
        break;

    case 2:
        bulan = "february";
        break;

    case 3:
        bulan = "maret"
        break;

    case 4:
        bulan = "april"
        break;

    case 5:
        bulan = "mei";
        break;

    case 6:
        bulan = "juni";
        break;

    case 7:
        bulan = "juli";
        break;

    case 8:
        bulan = "agustus";
        break;

    case 9:
        bulan = "september";
        break;

    case 10:
        bulan = "oktober";
        break;

    case 11:
        bulan = "november";
        break;



    case 12:
        bulan = "desember";
        break;

}

switch(tahun) {
    case tahun >1800 || tahun < 2050 :
        console.log(`masukkan tahun yang benar`);
        break;
}

console.log(`${tanggal}-${bulan}-${tahun}`)