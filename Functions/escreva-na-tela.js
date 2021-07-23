//OBJECTOS
//Criando metodos em um objecto

/*
Objeto escreva contem dentro de si o metodo Tela, que por sua ver é uma função que no seu interior retorna  um console.log com o argumento passado no medoto Tela

*/
const escreva = {
   lela(msg = undefined) {
        if(typeof(msg) ==='string' || msg == undefined){
            return console.log(msg)
        }else{
            return console.log('Digite uma cadeia de caracters')
        }
        
    },
    maius(msg = undefined){
        if(typeof(msg) === 'string'){
            return console.log(msg.toUpperCase())
        }
    }
}
escreva.lela('Aldair')
escreva.maius('Joaor')