/**
 * Operacoes basicas com Array
 * Adicionar
 * Remover
 * Apagar
 * Metodos
 */

let numeros = [1,3,5,8,10]; //Array de numero

console.log(numeros);

console.log(`Elemento numero 2 do array: ${numeros[2]}`); //Acessando o index 2 do array

console.log('Add Valor novo.');

numeros.push(0); //Add elemento no array em ultimo lugar

console.log(numeros);

numeros[2] = 2; //Add valor novo a posição 0 do array

console.log(numeros);

console.log(numeros.pop()); //Apaga o ultimo valor do array

console.log(numeros);

