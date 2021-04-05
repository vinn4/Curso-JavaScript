const alunos = [
    {nome:'joao',nota: 7.2, bolsista: false},
    {nome:'robert',nota: 6.4, bolsista: true},
    {nome:'xinn',nota: 5.2, bolsista: false},
    {nome:'fito',nota: 9.8, bolsista: true},
]
console.log(alunos.map(a=>a.nota))
const resul = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},0)
console.log(resul)