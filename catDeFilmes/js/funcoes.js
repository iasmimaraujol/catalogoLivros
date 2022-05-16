let a =  Math.floor(Math.random()*1000) //global
function minhaPrimeiraFuncao(){//local
    let b = Math.floor(Math.random()*1000)
    return a + b
}
function minhaSegundaFuncao(){//local
    let b = Math.floor(Math.random()*1000)
    return `${a} + ${b} = ${a + b}` //lembrando que aqui é um acento grave
}
function minhaTerceiraFuncao(){
    let b = Math.floor(Math.random()*1000)
    if(a>=b){
        return `${a} - ${b} = ${a + b}`
    }else{
        return `${a} + ${b} = ${a + b}`
    }
}
//esta é uma função anonima
const minhaQuartaFuncao = function(){
    return 'escrevendo minha função anônima!'
}

const b = (nome) => {
    return `Esta é uma arrow função`
}
function c(nome){
    d = nome
    if (nome==null){
        d = `esta é uma nova arrow function`
    }    
    return d
}
console.log(Math.floor(Math.random() * 1000))
console.log(minhaPrimeiraFuncao())
console.log(minhaSegundaFuncao())
console.log(minhaTerceiraFuncao())
console.log(minhaQuartaFuncao())
console.log(b('Iasmim'))
console.log(c())
console.log(c('Iasmim Araujo'))