// Primeira função (novoElemento) para criar o elemento e inserir a classe dentro desse elemento.
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}
//Criando função que irá criar uma Barreira
//metodo construtor
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    //verifica ordem
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    //colocando a altura de barreira 
    this.setAltura = altura => corpo.style.height = `${altura}px`
}
//criando outra função construtora para o par de barreiras

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    //criar uma barreira reversa
    this.superior = new Barreira(true)
    //criar uma barreira padrão
    this.inferior = new Barreira(false)
    //adiconando dentro da div os elementos
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    // função para criar a abertura aleatoria para o grau de dificuldade.
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    //função para pegar o valor x do eixo e retornar como inteiro
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    //função para setar o X do valor que foi passado
    this.setX = x => this.elemento.style.left = `${x}px`
    //função para pegar a largura
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}
//função para controlar varias barreiras contabilizar ponto e manter a distencia.

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    //criar os pares de barreiras e posicionados.
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    //criar a função para deslocar as barreirar levando em consideração a posição delas atuais e aplicando para a animação.
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando o elemento sair da tela
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length) //mandar para o final da tela
                par.sortearAbertura()
            }
            //calcular o meio para setar o ponto
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if (cruzouOMeio) notificarPonto()
            
        })
    }
}
            //função para criar o passaro.
            function Passaro(alturaJogo){
                let voando = false
                this.elemento = novoElemento('img','passaro')
                this.elemento.src = 'imgs/passaro.png'

                this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
                this.setY = y => this.elemento.style.bottom = `${y}px`
                window.onkeydown = e => voando = true
                window.onkeyup = e => voando = false

                this.animar = () => {
                const novoY = this.getY() + (voando ? 8 : -5)
                const alturaMaxima = alturaJogo - this.elemento.clientHeight

                if(novoY <= 0){
                    this.setY(0)
                } else if (novoY >= alturaMaxima){
                    this.setY(alturaMaxima)
                }else {
                    this.setY(novoY)
                }
            }
            this.setY(alturaJogo / 2)

        }
           

function Progresso () {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos =>{
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras){
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras =>{
        if(!colidiu){
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}
function FlappyBird(){
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura,largura,200,400, () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () =>{
        //loop do jogo
        const temporizador = setInterval(() =>{
            barreiras.animar()
            passaro.animar()   
            
            if(colidiu(passaro, barreiras)){
                clearInterval(temporizador)
            }
        },20)
    }
}
new FlappyBird().start()