const paragrafo01 = document.getElementById('paragrafo01')
const paragrafo02 = document.getElementById('paragrafo02')
const btnComecar = document.getElementById('btnComecar')
const cores = ['red','blue','purple','brown']
var numChutado;
var numGerado;

btnComecar.addEventListener('click', function(){
    comecar()
})

//FUNÇÃO PARA TROCAR COR DO PARGRAFO
function trocarCorPargrafo() {
    var indeceAleatorio = Math.floor(Math.random()*cores.length)
    paragrafo01.style.color = `${cores[indeceAleatorio]}`
}

//Função de verificação
function verificar(numeroChutado, numeroGeradoPeloSistema) {
    if (numeroChutado != numeroGeradoPeloSistema) {
        if (numeroChutado > numeroGeradoPeloSistema) {
            trocarCorPargrafo()
            paragrafo01.innerText = 'Errado!! Tente novamente você CHUTOU ALTO!!'
        } else {
             paragrafo01.innerText = 'Errado!! Tente novamente você CHUTOU BAIXO!!'
             trocarCorPargrafo()
        }
    } else {
        paragrafo01.style.color = 'green'
        paragrafo01.innerText = `VOCÊ ACERTOU!!!! O numero gerado foi ${numeroGeradoPeloSistema}`
        paragrafo02.innerHTML = '<button type="button" onclick="comecar()" class="botoes-comecar-e-jogar-novamente">Jogar Novamente</button>'
    }
}

//Função para começar o game
function comecar() {
    
    //Limpa o paragrafo com os resultados 
    paragrafo01.innerHTML = ''

    //Gera numero aleatorio de 0 ate 10
    numGerado = Math.floor(Math.random()*11)

    // Input para recolher o numero chutado pelo usuario
    paragrafo02.innerHTML = '<input type="number" max="10" min="0" id="iptnNumeroChutado"><button type="button" id="btnVerificar">Verificar</button>'
    var iptnNumeroChutado = document.getElementById('iptnNumeroChutado')

    //verificação
    const btnVerificar = document.getElementById('btnVerificar')
    btnVerificar.addEventListener('click', function(){
        numChutado = Number(iptnNumeroChutado.value)
        verificar(numChutado,numGerado)
    })
}