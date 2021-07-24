const mochilaDeTrabalho = [
    'computador','carregador do computador', 'agua', 'escova'
]

const estilo = () => console.log("=".repeat(20) + "\n");

//Com laço for

console.log("\t FOR");
estilo();

for(let c = 0;mochilaDeTrabalho.length > c; c++){
    console.log(mochilaDeTrabalho[c]);
}
console.log("\n \t FOR IN");
estilo();
//for in

for (let itens in mochilaDeTrabalho){
    console.log(mochilaDeTrabalho[itens]);
}

console.log("");

console.log("FOREACH")

//FORFOREACH

estilo()

const numero = [1,2,3,4,5,6];

/*  
    FOREACH()
    Para usar este medo necessita de uma função de callback ou função anonima ou então uma arrow function
    
    Sintaxe
        array.forEach(value, index, array)
*/

/*
Ex1

 * function out(value, index, array){
    console.log(array);
}

numero.forEach(out)
*/

//Ex2

numero.forEach((index,value,array) => console.log(array))
