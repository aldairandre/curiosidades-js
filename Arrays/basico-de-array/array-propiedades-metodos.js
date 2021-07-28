// Propriedades e Metodos de Array

let frutas = ['Banana','Morango','Pessigo'];

let frutas2 = 'Aldair Dos Santos' //Objeto comum

//Transformado em Array pelo metodo from() acessado atraves do construtor Array, semelhante a fazer um Splite como em Python
//O meto from() não tem efeito permanente em um objecto comum, caso deseje guardar o novo valor vc precisa add este valor a um variavel nova
console.log(Array.from(frutas2)); 

console.log(frutas2);

//Este metodo analisa se uma variavel é um Array, retorna True ou False
console.log(Array.isArray(frutas)); 

//Cria uma nova instância de Array com um número variável de argumentos, independentemente do número ou tipo dos argumentos.
console.log(Array.of(frutas2));
