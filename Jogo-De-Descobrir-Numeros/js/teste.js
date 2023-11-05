const paragrafo01 = document.getElementById('paragrafo01')
const paragrafo02 = document.getElementById('paragrafo02')
const btnComecar = document.getElementById('btnComecar')

var numChutado;
var numGerado;

btnComecar.addEventListener('click', function(){
    comecar()
})

//Função de verificação
function verificar(numeroChutado, numeroGeradoPeloSistema) {
    console.log('foi')
    if (numeroChutado != numeroGeradoPeloSistema) {
        if (numeroChutado > numeroGeradoPeloSistema) {
            paragrafo01.innerText = 'Errado!! Tente novamente você CHUTOU ALTO!!'
        } else {
             paragrafo01.innerText = 'Errado!! Tente novamente você CHUTOU BAIXO!!'
        }
    } else {
        paragrafo01.innerText = `VOCÊ ACERTOU!!!! O numero gerado foi ${numeroGeradoPeloSistema}`
        paragrafo02.innerHTML = '<button type="button" onclick="comecar()">Jogar Novamente</button>'
    }
}

//Função para começar o game
function comecar() {
    
    //Gera numero aleatorio de 0 ate 10
    numGerado = Math.floor(Math.random()*11)
    console.log(numGerado)

    // Input para recolher o numero chutado pelo usuario
    paragrafo02.innerHTML = '<input type="number" max="10" min="0" id="iptnNumeroChutado"> <button type="button" id="btnVerificar">Verificar</button>'
    var iptnNumeroChutado = document.getElementById('iptnNumeroChutado')

    //verificação
    const btnVerificar = document.getElementById('btnVerificar')
    btnVerificar.addEventListener('click', function(){
        numChutado = Number(iptnNumeroChutado.value)
        verificar(numChutado,numGerado)
    })
}