let num = [5, 8, 6, 4, 1, 3, 2,]
num.push(7)
num.sort()
console.log(`o vetor tem ${num.length} posições`)
let pos = num.indexOf(9)
if(pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`o valor está na posição ${pos}` )
}