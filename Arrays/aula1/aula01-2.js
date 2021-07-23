console.log('Metodos basicos dos Arrays');

//length, pop,push  
let familia = ['Aldair','Macrina','Tuayani', 'Joao', 'Wene','Joao'];

//Retorna o numeros de elemento de uma array
console.log('Numero de elementos do array: '+familia.length); 

 //Add um novo valor ao array
familia.push('Wene');
console.log('Add novo valor ao array');
console.log(familia);

//Varendo um array com a estruturas de repetição

//Forma Tradicional

for(let c = 0; c <= familia.length; c++){
    if(familia[c].toLowerCase() === 'wene'){
        console.log(familia[c]);
        console.log('Combinação encontrada');
    }else {
        console.log('Combinação não encontrada');
    }

}

