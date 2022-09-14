function contaPasso() {
    var txtinicio = document.getElementById("txti")
    var txtfim = document.getElementById("txtf")
    var txtpasso = document.getElementById("txtp")
    var res = document.getElementById("res")
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    // Conferindo se o valor do inicio, fim e passo não são indefinidos.
    if (txtinicio.value == '' || txtfim.value == '' || txtpasso.value == '') {
        res.innerHTML = `Não é possivel contar sem um inicio ou fim ou passo.`
    } else {
        if (passo == 0 || passo < 0) {
            alert('O passo não pode ser 0 ou negativo! Redefinindo para 1.')
            passo = 1
        }
        res.innerHTML = '<p>Contando:</p>'
        if (inicio < fim) {
            // DE TRAS PARA FRENTE.
            for (inicio; inicio <= fim; inicio += passo) {
                var verifica = inicio + passo // Verifica para colocar a bandeirinha no final.
                if (verifica > fim) {
                    res.innerHTML += `${inicio} &#x1F3C1;`
                } else {
                    res.innerHTML += `${inicio} &#x1F449; `
                }
            }
        } else if (inicio > fim) {
            // DE FRENTE PARA TRAS.
            for (inicio; inicio >= fim; inicio -= passo) {
                var verifica = inicio - passo
                if (verifica < fim) {
                    res.innerHTML += `${inicio} &#x1F3C1;`
                } else {
                    res.innerHTML += `${inicio} &#x1F449; `
                }
            }
        } else {
            // Caso todos os números forem iguais ou outro tipo de erro.
            res.innerHTML = `[ERRO] Não é possivel contar.`
        }
    }
}