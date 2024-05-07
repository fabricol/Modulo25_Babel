const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede socail: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil no: ${nomeDaRedeSocial}`)
})

const letras = ['a','b','c'];

const letras2 = letras.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'Fe'
    }
    return itemAtual
})
console.log(letras2)

letras2.push({
    nome: 'd',
    curso:'Al'
})

const paula = letras2.find(function(item) {
    return item.mome === 'a'; // Check if the item is 'a'
});

console.log(paula); // Output: a


const indiceA = letras.findIndex(function(item) {
    return item == 'a'
})

console.log(indiceA)

const todos = letras2.every(function(itemza) {
    return itemza.curso === 'Fe'
})
console.log(todos)

function filtraC (letras) {
    return letras.nome === 'c';
}

const letrasc = letras2.filter(filtraC)
console.log(letrasc)

const nums = [10, 20 , 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {

},0)