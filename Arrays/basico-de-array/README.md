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

# Sintaxe

```
[element0, element1, ..., elementN]
new Array(element0, element1, ..., elementN)
new Array(arrayLength)
```

__element0__, __element1__, ..., __elementN__

Um array JavaScript é inicializado com os elementos contém, exceto no caso onde um único argumento é passado para o construtor do Array e esse argumento é um número (veja o parâmetro arrayLength abaixo). Esse caso especial só se aplica para os arrays JavaScript criados com o construtor Array , e não para literais de array criados com a sintaxe de colchetes [].

__arrayLength__
Se o único argumento passado para o construtor do Array for um número inteiro entre 0 e 232-1 (inclusive), um novo array com o tamanho desse número é retornado. Se o argumento for qualquer outro número, uma exceção RangeError é lançada.

# Descrição

Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos. Já que o tamanho de um array pode ser alterado a qualquer momento e os dados podem ser armazenados em posições não contíguas, arrays JavaScript não tem a garantia de serem densos; isso depende de como o programador escolhe usá-los. De uma maneira geral, essas são características convenientes, mas, se esses recursos não são desejáveis para o seu caso em particular, você pode considerar usar arrays tipados.

Arrays não podem usar strings como índices (como em um array associativo), devem ser usados números inteiros. Definir ou acessar não-inteiros usando notação de colchetes (ou notação de ponto) não vai definir ou recuperar um elemento do array em si, mas sim definir ou acessar uma variável associada com a coleção de propriedades de objeto daquele array. As propriedades de objeto do array e a lista de elementos do array são separados, e as operações de travessia e mutação não podem ser aplicadas a essas propriedades nomeadas.

# Accessando elementos de um array 

Arrays JavaScript começam com índice zero: o primeiro elemento de um array está na posição 0 e o último elemento está na  posição equivalente ao valor da propriedade length (tamanho) menos 1.

```
let array = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(array[0]) // // exibe 'este é o primeiro elemento'
console.log(array[1]);              // exibe 'este é o segundo elemento'
console.log(array[array.length - 1]); // exibe 'este é o segundo elemento'
```