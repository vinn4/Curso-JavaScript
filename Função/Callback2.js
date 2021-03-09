const notas = [7.7, 6.5, 5.2, 8.9, 7.1, 9.0];

//sem callback
const notasBaixas = [];
for ( let i in notas){
    if (notas[i]<7){
        notasBaixas.push(notas[i])
    };
};
console.log(notasBaixas);

// com callback
const notasBaixas2 = notas.filter(nota => nota < 7);

console.log(notasBaixas2);
