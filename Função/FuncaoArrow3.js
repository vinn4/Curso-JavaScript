let comparaComthis = function(param){
    console.log(this=== param)
}

comparaComthis(global)

const obj = {}
comparaComthis = comparaComthis.bind(obj)
comparaComthis(global)
comparaComthis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)