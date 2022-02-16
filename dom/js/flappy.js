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

const barreiras = new Barreiras(700, 1200, 300, 400)
const areaDoJogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
}, 20)