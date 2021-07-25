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

### Remover um item do final do Array

```
let ultimo = frutas.pop() //Esta função remove o ultimo elemento de um array
```

### Remover do início do Array 
```
let primeiro = frutas.shitf() //Remove o primeiro item
```

### Adicionar ao inicio do Array

```
let adicionar = frutas.unshift('Morango') // Adiciona morango na posição 0
```

### Procurar o índice de um item na Array

```
let frutas = ['Morango','Banana','Manga']
let indexDoArray = frutas.indexOf('Manga')
//--> 1
```

### Remover um item pela posição do índice

```
let removeItem = frutas.split(indexDoArray,1)
```

### Remover itens de uma posição de índice

```
let vegetais = ['Repolho','Nabo','Rabanete','Cenoura']

let posiIni = 1;
let posiFi = 2; 

let itensRemovidos = vegetais.splice(posiIni,posiFi) //Apagar um array a partir da posiIni ate posiFi

console.log(vegetais)

//--> ['Repolho','Cenoura']
```

### Copiar um Array

```
let frutas = ['Morango','Manga']
let copiar = frutas.slice() //Função para fazer copias de array

console.log(copia)
//--> ['Morango','Manga'] 
```