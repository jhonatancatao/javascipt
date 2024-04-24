let num = [4, 5, 8, 7, 9]
num.sort()

//console.log(num)

//for (let pos = 0; pos < num.length; pos++) { 
  //  console.log(`a posição do ${pos} tem o valor ${num[pos]}`)
//}

for (let pos in num) {
    console.log(`a posição do ${pos} tem o valor ${num[pos]}`)
}