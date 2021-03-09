const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i in notas) {
    console.log(i,notas[i])
}
const pessoa = {
    nome: 'ana',
    sobrenome: 'banana',
    idade: 12,
    peso: 57,
    sexo: 'F'
}
for(let atributo in pessoa) { //usar para objeto.
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
