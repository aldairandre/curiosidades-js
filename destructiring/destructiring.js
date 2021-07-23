//Acessando propriedades do obejecto Event sem Desestrurturar
/*
function movimentoDoRato(event) {
    const clientX = event.clientX
    const clientY = event.clientY
    console.log(clientX,clientY)
}
*/

//Desestruturando uma função

/**
 * Agora é possibel desestrutura uma objeto usando criando um objeto de propreidades que se deseja desestruturar do objeto principal
 * Vou exemplificar desestruturando o obejoto event
 * 1 - É possivel desestruturar um objeto dentro de uma função
 * 2 - É possivel desestruturar um objeto dentro de parametros de uma função
 *      Exemplo:
 *              const movimentoDoRato = (clientX,clientY) => {
                const {clientX,clientY} = event 
                console.log(clientX,clientY)
                }
 * 
 */

const movimentoDoRato = event => {
    const {clientX,clientY} = event 
    console.log(clientX,clientY)
}
//Falando directamente com mo html

document.documentElement.addEventListener("mousemove", movimentoDoRato)