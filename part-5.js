var nama = "ronaldo"
var peran = "penyihir"

if(nama == "") {
    console.log("nama wajib di isi")
}
if(peran == "") {
    console.log("pilih peranmu untuk memulai")
}else {
    if(peran == "ksatria") {
        console.log(`${nama}, kamu dapat menyerang dengan senjatamu`)
    }else if (peran == "tabib") {
        console.log(`${nama}, kamu akan membantu temanm yang terluka`)
    } else if (peran == "penyihir") {
        console.log(`${nama}, ciptakan keajaiban yang membantu kemenangan`)
    }else {
        console.log('kamu jadi bot aja')
    }
}