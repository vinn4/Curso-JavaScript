function Pessoa(){                 
    this.idade = 0

    setInterval (()=>{
        this.idade++                   //this nao varia em arrowfunction
        console.log(this.idade)
    },1000)
}

new Pessoa