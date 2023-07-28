console.log('looping mundur')
i =10 
while( i >= 0 ){
    console.log(i)
    i--
}

console.log('')

console.log("looping maju") 
j = 0
while(j < 10){
    console.log(j)
    j++
}

console.log('')

for(let i= 0; i < 100; i++) {
    if(i % 2 == 0) {
        console.log(`${i} = genap`)
    }else if (i % 2 == 1){
        console.log(`${i} = ganjil`)
    }
}

console.log('')

for(let i = 1; i < 100; i += 2){
    if(i % 3 === 0) {
        console.log(`${i} kelipatan 3`)
    }
}

console.log('')

for(let i = 1; i < 100; i += 5) {
    if(i % 6 === 0) {
        console.log(`${i} kelipatan 6`)
    }
}

for(let i = 1; i < 100; i += 9) {
    if(i % 10 === 0) {
        console.log(`${i} kelipatan 10`)
    }
}