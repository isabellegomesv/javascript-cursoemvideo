// Colocando a hora atual do sistema.
var agora = new Date()
var hora = agora.getHours()

if (hora >= 1 && hora < 12) {
    console.log(`Bom dia! Agora são ${hora} horas da manhã.`)
} else if (hora < 18 && hora >= 12) {
    console.log(`Boa tarde! Agora são ${hora} horas da tarde.`)
} else if (hora <= 24 && hora >= 18){
    console.log(`Boa noite! Agora são ${hora} horas da noite.`)
} else {
    console.log(`O dia só dura 24 horas. Tente digitar corretamente.`)
}