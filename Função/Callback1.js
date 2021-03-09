const fabricantes = ['merc','audi', 'bmw'];
function imprimir(nome,indice){
    console.log(`${indice +1}.${nome}`)
};
fabricantes.forEach(imprimir);
fabricantes.forEach(function(a){
    console.log(a)
});
fabricantes.forEach(fabricantes => console.log(fabricantes)); //arrowfunction
