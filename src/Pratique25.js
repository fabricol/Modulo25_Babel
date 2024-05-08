const alunos = [
    {nome: 'Alberto', nota: 5},
    {nome: 'Bruno', nota: 6 },
    {nome: 'Carlos', nota: 7 },
    {nome: 'Davi', nota: 8},
    {nome: 'Emerson', nota: 9},
    {nome: 'Fabricio', nota: 10},
    {nome: 'Gustavo', nota: 0},
    {nome: 'Humberto', nota: 1},
    {nome: 'Iasmin', nota: 2},
    {nome: 'Julia', nota: 3},
    {nome: 'Larissa', nota: 4},
]

const passouDeAno = alunos.filter(function(alunos) {
    return alunos.nota >= 6;
})
console.log(passouDeAno)