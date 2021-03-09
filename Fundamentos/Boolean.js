let isAtivo = false;      //tipo boolean 
console.log(isAtivo);

isAtivo = true;           //mudando valor da variavel
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);          //Negando a nagação volta-se o valor inicial 
 

console.log('os verdadeiros...');
console.log(!!3);            //testando o numero para ver ser eh true
console.log(!!-1);
console.log(!!' ');          //espaço em branco da true
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');      //string vazia 
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar')
console.log(!!''|| null || 0 || 'epa' ||123);  //retorna o primeiro valor verdadeiro 
let nome = ''; 
console.log(nome || 'desconhecido');         // se n for atribuido valor ele imprime a outra opção "desconhecido"

nome = 'vinicius'; 
console.log(nome || 'desconhecido');     // se informado um valor ele imprime o que esta dentro da variavel.