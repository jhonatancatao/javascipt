function carregar(){
    let msg = window.document.getElementById('msg')

    let img = window.document.getElementById('imagem')

    let data = new Date()

    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#d9ae81'
    }  else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#bd5108'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#062b3d'
    }
}
