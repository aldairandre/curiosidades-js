const mochilaDeTrabalho = [
    'computador','carregador do computador', 'agua', 'escova'
]

const estilo = () => {
    console.log("=".repeat(20) + "\n")
};

//Com laço for

console.log("\t FOR");
estilo();

for(let c = 0;mochilaDeTrabalho.length > c; c++){
    console.log(mochilaDeTrabalho[c]);
}
console.log("\n \t FOR IN");
estilo();
//for in

for (let itens in mochilaDeTrabalho){
    console.log(mochilaDeTrabalho[itens]);
}