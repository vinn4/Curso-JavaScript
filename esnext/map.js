const tec = new Map();
tec.set('react',{framework: false});
tec.set('angular', { framework: true});

console.log(tec.react);
console.log(tec.get('react').framework);

const chaveVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'objeto'],
    [123,'Numero']
]);

chaveVariadas.forEach((vl,ch) => {
    console.log(ch,vl)
});

console.log(chaveVariadas.has(123));
chaveVariadas.delete(123);
console.log(chaveVariadas.has(123));
console.log(chaveVariadas.size);