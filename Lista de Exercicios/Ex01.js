/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function calculaNum(num1,num2){
    console.log(num1+num2);
    console.log(num1-num2);
    console.log(num1*num2);
    console.log((num1/num2).toFixed(2));
}
calculaNum(2,3);