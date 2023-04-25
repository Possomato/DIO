/*
- crie uma função que recebe dois números como parámetros
- confira se os números Sào iguais
- confira se a soma dos números é maior que 10 ou menor que 20
*/


function verificar(num1, num2){
    let igualdade, dez, vinte;

    if (num1 === num2){
        igualdade = 'são iguais'
    } else{
        igualdade = 'não são iguais'
    }

    if (num1 + num2 > 10){
        dez = 'maior'
    } else{
        dez = 'menor'
    }

    if (num1 + num2 < 20){
        vinte = 'menor'
    } else{
        vinte = 'maior'
    }

    console.log(`Os números ${num1} e ${num2} ${igualdade}. Sua soma é ${num1 + num2}, que é ${dez} que 10 e ${vinte} que 20.`)
}

verificar(1, 2)