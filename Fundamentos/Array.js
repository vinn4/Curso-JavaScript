const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0],valores[3]);
console.log(valores[4]);
valores[4] = 11;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false , null , 'teste'); //aceita valores misturados porem é uma mã pratica.
console.log(valores);

console.log(valores.pop());  // remove o ultimo elemento do array.
delete valores[0];   //deleta no indice informado.

console.log(valores);      

console.log(typeof valores);