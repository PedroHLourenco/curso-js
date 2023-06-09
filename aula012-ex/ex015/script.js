function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgs/homem-criança.png')
            } else if (idade < 21) {
              //jovem  
              img.setAttribute('src', 'imgs/homem-jovem.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'imgs/homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imgs/homem-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgs/mulher-criança.png')
            } else if (idade < 21) {
              //jovem  
              img.setAttribute('src', 'imgs/mulher-jovem.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'imgs/mulher-adulta.png')
            } else {
                //idosa
                img.setAttribute('src', 'imgs/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}