// Atividade01 - Verificar se uma frase é palíndromo

let frase = 'Primeiro, você sabia que existe um palíndromo considerado'

let fraseFormatada = frase.normalize('NFD').replace(/\s/g, '').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '').toLowerCase();
let caracteres = fraseFormatada.split('')
let caracteresReverse = caracteres.reverse()
let stringReverse = caracteresReverse.join('')


if (fraseFormatada == stringReverse){
    console.log('Está frase é um palíndromo!')
} else{
    console.log('Está frase não é um palíndromo.')
} 