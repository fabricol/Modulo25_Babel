// function somar () {
//     let soma = 0;
    
//     for (let i = 0; i < arguments.length; i++) {
//         soma += arguments[i];
//     }
//     return soma;
// }

// console.log(somar(10,20,30))

// Criação do operador rest
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}


// spread, espalhar os itens de um array
const numeros3 = [3,6,9,12]
console.log(...numeros3)

console.log(numeros3)

const times = ['america','corinthians']
const times2 = ['palmeiras','sp']

const timeFut = [...times,...times2]

console.log(timeFut)


// Como copiar as propriedades de outro objeto com o rest?

const carroJulia = {
    modelo: 'gol',
    marca: 'Vw',
    motor: 1.6
}
// O carro da Ana só muda o motor

const carroAna = {
    ...carroJulia,
    motor: 1.8
}

