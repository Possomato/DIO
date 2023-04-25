/*
Faça um programa que N(quantidade de números) e seus valores.
Imprima o maior número par o menos número impar
*/

const {gets, print} = require('./desafio15funcoes')

const n = gets()
let maiorNumeroPar = 0
let menorNumeroImpar = 0

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 == 0){
        if (numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar == 0){
            menorNumeroImpar = numero;
        } else if (numero < maiorNumeroPar){
            menorNumeroImpar = numero;
        }
    }
}

print(`O maior número par é ${maiorNumeroPar}, e o menor número impar é ${menorNumeroImpar}`)