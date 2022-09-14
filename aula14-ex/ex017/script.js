function tabuada() {
    let txtn = document.getElementById("txtn") 
    let tabela = document.getElementById("seltab")
    if (txtn.value == '') {
        alert('Digite um número!')
    } else {
        let num = Number(txtn.value)
        tabela.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tabela.value = `tab${c}`
            tabela.appendChild(item)
        }
    }
}