// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de função

//usar spread com objeto
const funcionario = { nome:'maria', salario: 12345.99 };
const clone = { ativo: true , ...funcionario};
console.log(clone);

//usar spread com array
const grupoA = ['joão','pedro','mario'];
const grupoF =['Maria','rafael', ...grupoA];
console.log(grupoF);