/*
Faça uma function para escrever seu nome
*/

function escrevaNome(nome){
    return (`Seu nome é ${nome}`)
}

escrevaNome('Gabriel')

/*
Faça uma function para conferir se você é maior de idade
*/

function verificarIdade(idade){
    if (idade >= 18){
        console.log( escrevaNome('Gabriel') + ' e você é maior de idade')
    } else{
        console.log( escrevaNome('Gabriel') + ' e você é menor de idade')
    }
}

verificarIdade(20)