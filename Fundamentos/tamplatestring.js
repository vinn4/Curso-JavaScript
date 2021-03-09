const nome = 'vinicius';
const concatenacao = 'ola ' + nome + '!';
const tamplate = `         
ola
${nome}!`; //usando tamplate de string ele considera tudo inclusive a quebra de linha .  Backchiken
console.log(concatenacao,tamplate);    

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);
const  up = texto=> texto.toUpperCase();
console.log(`ei ... ${up ('cuidado')}!`);

