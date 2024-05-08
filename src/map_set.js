let meuMap = new Map();

meuMap.set("nome","fabricio")
meuMap.set("stack","html","css","js")


console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

console.log(meuMap.size)

// site 4Devs
// gera informações aleatórias para que possamos modelar, exemplo:

const cpfs = new Set();
// esses numeros precisam ser considerados como str, pq existem cpfs que começam com o número "0"

cpfs.add('40977152081')
cpfs.add('29933845039')
cpfs.add('99606883051')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) =>  {
    console.log(valor);
})

// Removendo str repetidos
const array = ['Gian Souza','Fabricio',"Maria","Fabricio","Maria"]

const arrayComoSet = new Set([...array])
// o set não permite itens duplicados, uma alternativa para eliminar itens duplicados
console.log(arrayComoSet)
// Para transforma-lo em um array novamente
const arraySemDouble = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemDouble)

