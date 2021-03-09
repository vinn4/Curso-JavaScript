const escola = "falida2";
console.log(escola);
console.log(escola.charAt(1)); //mostra a letra na posição 1 da string.
console.log(escola.charAt(10)); //não retorna nenhum valor e nao da erro de comp.
console.log(escola.charCodeAt(3)); // devolver o valor da tabela ASCII na posição selecionada.
console.log(escola.indexOf('a')); // retorna na string a posição que está.



console.log(escola.substring(1)); // le todas as posiçoes da string.
console.log(escola.substring(0,4)); // le da posição 0 a 4 da string.
console.log("Escola ".concat(escola).concat("!!!!"));  //concatenando strings/ pode usar o + .
console.log(escola.replace(2,'g')); //substituição de valor.
console.log(escola.replace(/\w/g,'g')); //substituição  todos os valor por g. (flag global usando regex)
console.log('ana,tongo,macaco'.split(",")); //separa em array depois da virgula.


