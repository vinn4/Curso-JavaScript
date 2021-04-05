const alunos = [
    {nome:'joao',nota: 7.2, bolsista: false},
    {nome:'robert',nota: 6.4, bolsista: true},
    {nome:'xinn',nota: 5.2, bolsista: false},
    {nome:'fito',nota: 9.8, bolsista: true},
]
//desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

//desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado , bolsista) => resultado || bolsista;
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))
