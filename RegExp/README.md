# Expressões Regulares

Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos. Elas podem ser utilizadas com os métodos exec e test do objeto RegExp, e com os métodos match, replace, search, e split do objeto String. Este capítulo descreve o uso de expressões regulares em JavaScript.

# Criando uma Expressão Regular

Há duas maneiras de construir uma expressão regular:

Usando uma expressão literal, que consiste em um padrão fechado entre barras, como o exemplo a segui

```
const re = /ab+c/;
```

As expressões regulares na forma literal são compiladas quando o script é carregado. Esta forma de construção possui melhor performace quando a expressão regular utilizada é uma constante, ou seja, não muda durante a execução.

Ou chamando o construtor do objeto RegExp:

```
let re  = new RegExp("ab+c");
```

Usando o construtor, a compilação da expressão regular é realizada em tempo de execução. Use o construtor quando souber que o padrão da expressão regular irá mudar ou quando o padrão for desconhecido, oriundo de outra fonte, uma entrada de usuário por exemplo.