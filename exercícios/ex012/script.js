function gerar() {
    let numero = document.querySelector('#txtn')
    let tabuada = document.querySelector('#seltab')
    
    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')   
    } else {
        let n = Number(numero.value)
        let c = 1
        for(let c = 1; c<=10; c ++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
        }
    }
    
}

function limpar(){
    let numero = document.querySelector('#txtn')
    let tabuada = document.querySelector('#seltab')

    tabuada.innerHTML = ''
}