const p2 = document.querySelector('.p02')
const p3= document.getElementById('p03')
const cores =[
    'red','blue','purple','brown'
]

const comecar= document.getElementById('comecar')
comecar.addEventListener('click', geradordenum)


function geradordenum (){
    var numGerado= Math.floor(Math.random()*11)
    p2.innerHTML=''
    p3.innerHTML='Chute um numero: <input type="number" name="numeroChutado" id="numeroChutado" min="0" max="10"><input type="button" value="verificar" class="verificar">'

    var numChutadotxt = document.getElementById('numeroChutado')

    const verificar= document.querySelector('.verificar')
    verificar.addEventListener('click', verificacao)

    function verificacao() {

        //Mudar cor do Paragrafo
        let numArrayAleatorio= Math.floor(Math.random()*cores.length)
        p2.style.color=`${cores[numArrayAleatorio]}`

        var numChutado= Number(numChutadotxt.value)
        if (numChutado==numGerado) {
            p2.innerHTML='Parabéns!'
            p2.style.color='green'
            p3.innerHTML=`Você acertou! o numero gerado pelo sistma foi: ${numGerado}<br><input type="button" value="Jogar Novamente" id="retry">`
            const retry= document.querySelector('#retry')
            retry.addEventListener('click', recomecar)
        }else{
            if (numChutado<numGerado) {
                p2.innerHTML='O numero chutado é menor que o numero gerado pelo sistema. Tente novamente:'
            }else{
                p2.innerHTML='O numero chutado é maior q o numero gerado pelo sistema. Tente novamente!:'
            }
        }
    }
}

function recomecar (){

    var numGerado= Math.floor(Math.random()*11)
    p3.innerHTML='Chute um numero: <input type="number" name="numeroChutado" id="numeroChutado" min="0" max="10"><input type="button" value="verificar" class="verificar">'
    p2.innerHTML=''

    var numChutadotxt=document.getElementById('numeroChutado')

    const verificar= document.querySelector('.verificar')
    verificar.addEventListener('click', verificacao)

    function verificacao() {

        let numArrayAleatorio= Math.floor(Math.random()*cores.length)
        p2.style.color=`${cores[numArrayAleatorio]}`

        var numChutado= Number(numChutadotxt.value)
        if (numChutado==numGerado) {
            p2.innerHTML='Parabéns!'
            p2.style.color='green'
            p3.innerHTML=`Você acertou! o numero gerado pelo sistma foi: ${numGerado}<br><input type="button" value="Jogar Novamente" id="comecar">`
            var comecar= document.getElementById('comecar')
            comecar.addEventListener('click', geradordenum)
        }else{
            if (numChutado<numGerado) {
                p2.innerHTML='O numero chutado é menor que o numero gerado pelo sistema. Tente novamente:'
            }else{
                p2.innerHTML='O numero chutado é maior q o numero gerado pelo sistema. Tente novamente!:'
            }
        }
    }
}
