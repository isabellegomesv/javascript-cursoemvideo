function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 6 && hora < 12) {
        // Dia
        img.src = 'imagens/foto-dia.jpg'
        window.document.body.style.background = '#ffcc9a'
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        img.src = 'imagens/foto-tarde.jpg'
        window.document.body.style.background = '#b9846f'
    } else {
        // Noite e madrugada
        img.src = 'imagens/foto-noite.jpg'
        window.document.body.style.background = '#454f5b'
    }
}