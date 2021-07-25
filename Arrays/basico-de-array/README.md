# Array

O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

<br>

### Criando um Array

```
let frutas = ['Maçã', 'Banana']; //Array

console.log(frutas.length); //função para mostrar o tamanho do array

//--> 2
```

### Acessar um item (index) do Array

```
let primeiro = frutas[0];
//--> 'Maçã'

let ultima = frutas[1];
//--> 'Banna'
```

### Iterar um Array

```
frutas.forEach(function(valor,index,array){
    console.log(valor,index)
    //--> Maçã 0
    //--> Banana 1
})
```

### Adicionar um item ao final do Array

```
let adicionar = frutas.push('Laranja') //A função add o elemento novo na ultima posição do array 
```