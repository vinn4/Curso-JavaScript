// armazenar funcao em variavel
const  imprimirSoma = function(a , b) {
    console.log(a + b );
    
};
imprimirSoma(2,3);

//armazenando uma funcao arrow em uma variavel
 const soma = (a ,b) => {
     return a + b;
 }
 console.log(soma(3,4));
 // retorno implicito.

 const subtracao = (a , b) => a - b;  //forma reduzida de criar função.
 console.log(subtracao(2,1));