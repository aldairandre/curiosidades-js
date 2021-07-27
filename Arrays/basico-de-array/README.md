# Array

O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
Artigo original [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)


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
<<<<<<< HEAD
let arr = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(arr[0]);              // exibe 'este é o primeiro elemento'
console.log(arr[1]);              // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este é o segundo elemento'
```

Elementos de um array são somente propriedades de objetos, da forma que toString é uma propriedade. Contudo, note que tentando acessar o primeiro elemento de um array da seguinte forma causará um erro de sintaxe, pois o nome da propriedade é inválido:

```
console.log(arr.0); // um erro de sintaxe
```

Não há nada de especial a respeito de arrays JavaScript e suas propriedades que causam isso. As propriedades JavaScript que começam com um dígito não podem ser referenciadas com notação de ponto. Elas necesitam usar notação de colchetes para poderem ser acessadas. Por exemplo, se você tivesse um objeto com a propriedade "3d", também teria que ser referenciá-la usando notação de colchetes. Por exemplo:

```
let anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(anos.0); // um erro de sintaxe
console.log(anos[0]); // funciona corretamente
```
```
renderer.3d.setTexture(model, 'personagem.png'); // um erro de sintaxe
renderer['3d'].setTexture(model, 'personagem.png'); //funciona corretamente
```

Note que no exemplo 3d, '3d' teve de ser colocado entre aspas. É possivel também colocar entre aspas os índices de arrays JavaScript (ou seja, years['2'] ao invés de years[2]), contudo isto não é necessário. O valor 2 em years[2] eventualmente será convertido a uma string pela engine do JavaScript  através de uma conversão explicita com o método toString. E é por esta razão que  '2' e '02' irão referenciar dois slots diferentes no objeto anos e o seguinte exemplo pode ser true:

```
console.log(anos['2'] != anos['02']);
```

De forma similar, propriedades de objeto que sejam palavras reservadas(!) só podem ser acessadas como strings em notação de colchetes:

```
let promessa = {
let proromessa = {
  'var': 'texto',
  'array': [1, 2, 3, 4]
};

console.log(promessa['var']);
```
```
let array = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(array[0]) // // exibe 'este é o primeiro elemento'
console.log(array[1]);              // exibe 'este é o segundo elemento'
console.log(array[array.length - 1]); // exibe 'este é o segundo elemento'
```

# Relação entre length e propriedades numéricas

As propriedades length e numéricas de um array Javascript são conectadas. Varios dos métodos javascript pré-definidos (por exemplo, join, slice, indexOf etc.) levam em conta o valor da propriedade length de um array quando eles são chamados. Outros métodos (por exemplo, push, splice etc.) também resultam em uma atualização na propriedade length do array.

```
let frutas = [];
frutas.push('Banana','Maça','Pessego');

console.log(frutas.length);

//--> 3
```

Quando configurar uma propriedade num array Javascript em que a propriedade é um índice valido do array e este índice está fora do atual limite do array, o array irá crescer para um tamanho grande o suficiente para acomodar o elemento neste índice, e a engine irá atualizar a propriedade length do array de acordo com isto:

```
frutas[5] = 'Manga';
console.log(frutas[5]);
console.log(Object.keys(frutas)); //['0','1','2','5']
console.log(frutas.length) 
//--> 6
```

Configurar a propriedade length diretamente, também resulta em um comportamento especial:

```
frutas.length = 10;
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 10
```

Diminuir o valor de length, entretanto, apaga elementos:

```
frutas.length = 2;
console.log(Object.keys(frutas)); // ['0', '1']
console.log(frutas.length); // 2
```

# Criando um array usando o resultado de uma comparação

O resultado de uma comparação entre uma expressão regular e uma string pode criar um array Javascript. Este array tem propriedades e elementos que disponibilizam informações sobre a comparação. Esse array é o valor de retorno dos métodos RegExp.exec, String.match, e String.replace. Para explicar melhor sobre estas propriedades e elementos, veja o seguinte exemplo e então consulte a tabela abaixo:

```
// Encontra um d seguido por um ou mais b's seguido por um d
// Salva os b's encontrados e o d seguinte
// Ignora caixa (maiúscula/minúscula)

var minhaRegex = /d(b+)(d)/i;
var meuArray = minhaRegex.exec('cdbBdbsbz');
```

As propriedades e elementos retornados desta comparação são os seguintes:

| Propriedade/Elemento | Descrição Exemplo| Descrição Exemplo|
| -------------------- | ---------------- | ---------------- |
| input                | Uma propriedade somente-leitura que reflete a string original a qual a expressão regular foi comparada.|    cdbBdbsbz              |
| index               |   Uma propriedade somente-leitura que é o índice baseado em zero da comparação na string.               |         1         |
| [0]                  |       Um elemento somente-leitura que especifica os ultimos caracteres que foram encontrados.           |    	dbBd              |
| [1], ...[n]          |          Elementos somente-leitura que especificam as substrings de comparações entre parênteses encontradas, se incluidas na expressão regular. O número de possíveis substrings entre parenteses é ilimitado. |[1]: bB [2]: d|
