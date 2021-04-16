
 //revisão
 //let e const 
{
    var a =2 // valido dentro como fora do bloco.
    let b =4 //so é valido dentro do bloco.
    console.log(b)
}
console.log(a)

// Template String

const produto = 'Ipad'
console.log(`${produto} é caro!`)

//Destructuring
const [l,e,...tras] = "Cod3r"
console.log(l,e,tras)

const [x,,y] = [1,2,3]
console.log(x,y)

const {idade: i,nome} = { nome: 'ana', idade: 9}
console.log(i,nome)

// Arrow Function 
const soma = (a,b) => a + b  //return implicito 
console.log(soma(2,3))

//operador rest 
function total ( ...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5,6,67,7,8,))

// ES8: Object.values// Objects.entries

const ob={ a: 1, b:2 ,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
