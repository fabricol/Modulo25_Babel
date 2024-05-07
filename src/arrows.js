const minhaFuncao = () => "Diz olá";
console.log(minhaFuncao())

const retornaUmCarro = () => ({
    modelo: "Ka",
    marca: "Ford"
})
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40, 
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    freiar: () => {
        this.velocidade -= 10;
    }
}
// O this, quando em uma arrow function pode ser undefined a depender de quem resgata o seu valor
carro.acelerar();
carro.freiar();

console.log(carro.velocidadeAtual)
