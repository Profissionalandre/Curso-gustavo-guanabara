function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'image/criancaH.jpg')
                img.setAttribute('src', 'image/criancaH.jpg');
                img.setAttribute('width', '300px');  // Defina a largura desejada em pixels
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'image/jovemH.jpg')
                img.setAttribute('width', '300px');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'image/adultoH.jpg')
                img.setAttribute('width', '300px');
            } else {
                //idoso
                img.setAttribute('src', 'image/idosoH.jpg')
                img.setAttribute('width', '300px');
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'image/criancaM.jpg')
                img.setAttribute('width', '300px');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'image/jovemM.jpg')
                img.setAttribute('width', '300px');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'image/adultoM.jpg')
                img.setAttribute('width', '300px');
            } else {
                //idoso
                img.setAttribute('src', 'image/idosoM.jpg')
                img.setAttribute('width', '300px');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}