function tratarErro(erro){
    //throw new Error('papapapapap')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.nome,
    }
}
function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
   
}
const obj = { nome : 'roberto'}
imprimirNomeGritado(obj)