/*const trocaValores =  function(a = 10 ,b = 15){
    c = a;
    a = b;
    b = c;
    return `Valor inical de A: ${c} \nValor inical de : ${a}\nTroca\nA: ${a}\nB: ${b}`
}
console.log(trocaValores)
console.log(typeof(trocaValores)) */

// Arrow Function
const trocaValores = (a = 10,b = 15) => {
    const c = a
    a = b
    b = c
    res = [a,b,c,a] //Retorna o valores trocados e o default
    return res
}

const resusltado = trocaValores()

console.log(resusltado)

