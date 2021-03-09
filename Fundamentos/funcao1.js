//funçao sem retorno
function imprimeSoma(a, b){
    console.log(a + b)
};

imprimeSoma (2, 3);
imprimeSoma (2);

//função com retorno
function soma(a , b = 1) {
    return a + b
};
console.log(soma(2,4));
console.log(soma(2));