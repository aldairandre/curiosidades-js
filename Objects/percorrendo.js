//OBJETO SIMPLES
const garrafa = {
    tamanho : 1.5,
    cor : 'azul',
    largura : 15
}

//Percorrendo objeto com laço for in

for(let chave in garrafa){
    console.log(garrafa[chave])
}

function criaCelular(marca,tamanhoDeTela,cor){
    return{
        marca,
        tamanhoDeTela,
        cor
    }
}

console.log(typeof(garrafa))
console.log(garrafa)
