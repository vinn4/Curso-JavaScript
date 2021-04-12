const moduloA = require('../../moduloA'); //../ acessa a pasta anterior.

console.log(moduloA);


const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bomdia')
    res.end()
}).listen(8080)