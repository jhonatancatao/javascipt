function resultado(){
    let paisBruto = document.querySelector("#pais")
    let pais = (paisBruto).value
    let resultado = document.querySelector('#res')
    let ondeNasceu = document.querySelector('#voce')
    ondeNasceu.innerHTML = `<p>Você nasceu no(a) ${pais}!</p>`
    
    if(pais == 'Brasil'){
        resultado.innerHTML = '<p>Você é Brasileiro!</p>'
    } else {
        resultado.innerHTML = '<p>Você é Estrangeiro!</p>'
        
        
    }
}

