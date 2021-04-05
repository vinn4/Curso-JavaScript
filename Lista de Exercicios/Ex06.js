/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function regimeSimples(capI, taxJ, tempA) {
    mont = capI + (capI * taxJ * tempA);
    return console.log(Mont);
}

function regimeComposto(capI, taxJ, tempA) {
    mont = capI * (1 + taxJ) ** tempA;
    return console.log(Mont);
}
regimeSimples(2, 2, 2);
regimeComposto(2, 2, 2);