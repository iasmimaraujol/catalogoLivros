let listaDeLivros = [
    'https://kbimages1-a.akamaihd.net/ad12ce73-aa34-473e-9a53-77a50360c239/1200/1200/False/pride-prejudice-13.jpg',
    'https://media.fstatic.com/Cyo0xgMLbGIpLa58syFP5L7GyuU=/290x478/smart/media/movies/covers/2020/04/Emma-3-690x1005.jpg',
    'https://m.media-amazon.com/images/I/51kfFS5-fnL._AC_SY1000_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81fXBeYYxpL.jpg'
]
let listaDosTitulosDosLivros = [
    'Pride and prejuice',
    'Emma',
    'Lord of rings',
    'O pequeno princípe'
]
//! DOM 
let catalogo =document.querySelector('#catalogo')
let i = 0
let erro = document.querySelector('#erro')
for (i = 0; i < listaDeLivros.length; i++) {
    catalogo.innerHTML += `<div class = "livro">
    <img src = ${listaDeLivros[i]}><figcaption>${listaDosTitulosDosLivros[i]}</figcaption>
    </div>`  
}

let livroRepetido = true

function cadastrar() {   
    let novoLivro = document.querySelector('#livro').value
    //o titulo é o id que eu coloquei no html

    let novoTitulo = document.querySelector('#titulo').value

    if (listaDeLivros.includes(novoLivro) || listaDosTitulosDosLivros.includes(novoTitulo)) { 
        erro.innerHTML = `Livro ${novoTitulo} já cadastrado`        
    }else{
        listaDeLivros.push(novoLivro)
        listaDosTitulosDosLivros.push(novoTitulo)
        erro.innerHTML = ''
        mostraLivros()
    }
    document.querySelector('#livro').value = ''
    document.querySelector('#titulo').value = ''
}

function mostraLivros() {
    do{
        catalogo.innerHTML +=
        `<div class = "livro">
            <img src = ${listaDeLivros[i]} alt = ${listaDosTitulosDosLivros[i]}><figcaption>${listaDosTitulosDosLivros[i]}
        </div>`
        i++
    }while(i < listaDeLivros.length)   
}