function soBoaNoticia(nota){
    if (nota>=7) {
        console.log("Aprovado!! sua nota foi " + nota)        
    } else{
       console.log("reprovado :(")
    }
}
soBoaNoticia(7.5)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor){
    console.log('é verdade...' + valor)
    }
        
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
