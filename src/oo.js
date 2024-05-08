// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome - nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon("Pikachu","elétrico")

class Pokemon {
// Esse simple "#" o torna privado, isso significa que ele só pode ser alterado dentro classe.
    #hp =100;

    // nome = '';
    // tipo = '';
// Com uma função construtora não é necessário criar as prpierdades vazias como foi feito anteriormente
// Criação de uma função construtora, para que seja mais simples para acrescentar novos pokemons
    constructor(nomeDoPokemon,tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}
// o extends é utilizada para indicar que é uma extensão de uma outra classe "mãe"
class Pikachu extends Pokemon {

}
// conceito de função construtora


const pikachuDoAsh = new Pikachu('pikachu','elétrico')
const pikachu = new Pokemon('pikachu','elétrico');
// pikachu.atacar('choque do trovão')
console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu)
// true
console.log(pikachuDoAsh instanceof Pokemon)
// true

// As instancias das classes filhas tbm são instancias da classe mãe

// Para tirar a redundância:

// Os "_1" foram criados para que n sejam perdidas as explicações anteriores

class Pikachu_1 extends Pokemon {


    constructor() {
        super('Pikachu','Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAsh_1 = new Pikachu_1();
pikachuDoAsh_1.recebeuAtaque();


// A propriedade HP é uma informação sensível, portanto essa ferramenta deve ser encapsulada, *conferir linha 9*
// pikachuDoAsh_1.hp = 5000

pikachuDoAsh_1.atacar()
pikachuDoAsh_1.exibeHp()