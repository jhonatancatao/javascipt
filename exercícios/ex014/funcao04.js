function fatorial(n) {
    let fat = 1
    for(let a = n; a > 1; a-- ) {
         fat *= a
    }
    return fat
}

console.log(fatorial(5))

// 5! = 5 x 4 x 3 x 2 x 1