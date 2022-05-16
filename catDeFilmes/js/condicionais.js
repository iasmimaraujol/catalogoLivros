let a = 0
//do{
a = Math.floor(Math.random() * 100)
console.log(a)
if(a > 50){
    console.log('O valor de a esta na metade maior da sequência')
} else if (a === 50) {
    console.log('o valor de a é igual a 50')    
}else{
    console.log('o a é menor que 50')
}
//}while(a!=50)

//!diferença entre == e o ===
/** */
let b = 50
let c = 50
let d = '50'

if (b == c) {
    console.log(`esta comparação é entre b e c ${b} == ${c}`)    
}
if (b === c) {
    console.log(`esta comparação é entre b e c ${b} === ${c}`)    
}
if (b === d) {
    console.log(`esta comparação é entre b e d ${b} === ${d}`)    
}
if (b == d) {
    console.log(`esta comparação é entre b e d ${b} == ${d}`)    
}

