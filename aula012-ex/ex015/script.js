function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = document.getElementById('res')

   // Verifica se o ano é igual a zero ou maior que o ano atual.
   if (fano.value.length == 0 || fano.value > ano) {
      window.alert('ERRO! Verifique os dados e tente novamente.')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if (fsex[0].checked) {
         genero = 'homem'
         if (idade >= 0 && idade <= 3) {
            // bebe
            img.setAttribute('src', 'imagens/bebe-m.jpg')
         } else if (idade <= 10) {
            // criança
            img.setAttribute('src', 'imagens/menino.jpg')
         } else if (idade <= 21) {
            // adolecente
            img.setAttribute('src', 'imagens/jovem-m.jpg')
         } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'imagens/adulto-m.jpg')
         } else {
            // idoso
            img.setAttribute('src', 'imagens/idoso-m.jpg')
         }
      } else {
         genero = 'mulher'
         if (idade >= 0 && idade <= 3) {
            // bebe
            img.setAttribute('src', 'imagens/bebe-f.jpg')
         } else if (idade <= 10) {
            // criança
            img.setAttribute('src', 'imagens/menina.jpg')
         } else if (idade <= 21) {
            // adolecente
            img.setAttribute('src', 'imagens/jovem-f.jpg')
         } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'imagens/adulto-f.jpg')
         } else {
            // idoso
            img.setAttribute('src', 'imagens/idoso-f.jpg')
         }
      }

      res.style.textAlign = 'center'
      res.style.padding = '5px'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
}
