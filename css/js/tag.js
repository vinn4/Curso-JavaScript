const color = {
    body: 'white',
    p:'red',
    div: 'green',
    span: 'blue',
    section:'grey',
    ul: 'black',
    ol: '#e53935',
    padrao: 'yellow',
    get (tag){
        return this[tag]? this[tag]:this.padrao
    }

}

document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = color.get(tagName)

    if (!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = color.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label,elemento.childNodes[0])
    }
})