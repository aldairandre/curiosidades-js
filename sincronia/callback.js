//
/**
 * 
 */

//Importa o modulo que gerencia o file system para trabalhar com IO

function callback (erro,conteudo){
    console.log(conteudo);
}
const fileSis = require('fs',callback);

console.log(typeof(fileSis));

fileSis.readFile('',callback);

console.log(1);
console.log(2);
console.log(3);