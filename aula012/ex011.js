var idade = 20
if (idade < 16) {
    console.log(`Com ${idade} anos não é possivel votar.`)
} else if (idade < 18 || idade > 70) {
        console.log(`Com ${idade} anos o voto é opcional.`)
    } else {
        console.log(`Com ${idade} anos o voto é obrigatório. `)
}
