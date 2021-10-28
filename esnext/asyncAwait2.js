function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(()=>{    
            resolve()
        },tempo)
    })
}

// esperarPor(2000)
// .then(esperarPor)
// .then(esperarPor)

async function executar (){
    await esperarPor(3333)
    console.log('Async/Await 1 ')
    await esperarPor(3333)
    console.log('Async/Await 2')
    await esperarPor(3333)
    console.log('Async/Await 3')
    
}

executar()