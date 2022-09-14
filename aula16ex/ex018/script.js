let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#slista')
let res = document.querySelector('div#res')
var array = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adDados() {
    if (isNumero(num.value) && !inLista(num.value, array)) {
        array.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor não inválido ou já encontrado na lista')
    }
    num.value = ''
    // Coloca o foco no input automaticamente.
    num.focus()
}

function finalizar() {
    if (array.length == 0) {
        alert('Impossivel finalizar sem adicionar numeros!')
    } else {
        let maior = array[0] 
        let menor = array[0]
        let soma = 0
        for (let pos in array) {
            soma += array[pos]
            if (array[pos] > maior) {
                maior = array[pos]
            } 
            if (array[pos] < menor) {
                menor = array[pos]
            }
        }

        res.innerHTML = `<p>Foram adicionados ${array.length} valores.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>A soma dos valores foi de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores foi de ${soma / array.length}.</p>`
    }
}