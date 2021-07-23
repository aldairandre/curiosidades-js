//FOrmas de Declarar uma função

//Forma mas basica
function mostrarNome(nome) {
    return nome
};

//Forma de expressão
const tamanhoDaString = nome => nome.length;

//Arrow Function
const upperName = nome => nome.toUpperCase() ;

//Arrow Function simplificada
/*
    Caso a funcão tenha apenas uma unica linha é possivel escrevela de uma forma mais simplificada
    abaixo escreverei um função de uma unica linha para somar dois numeros
    1 - Quando temos apenas um argumrnto não é necessario o uso de parenteses
    2 - Quando escrevemos a Arrow funcion numa unica não precisamos usar a palavra return
    3 - Não é preciso usar o {}
*/
//ARREW FUNCTION SIMPLIFICADA

const soma = (a,b) => a + b;


//Chamada e mostrar na tela
console.log(mostrarNome('Aldair'));
console.log(tamanhoDaString('Andre'));
console.log(upperName('joao'));
console.log(soma(2,4));