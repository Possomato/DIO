/*
Faça um programa que receba a média de um aluno.
 media < 5 = reprovado
 media >= 5 e < 7 = recuperação
 media >= 7 = aprovado
*/

const {gets, print} = require('./desafio14funcoes')

const media = gets()

if (media < 5){
    print('Reprovado!')
} else if (media >=5 && media < 7){
    print('Recuperação')
} else{
    print('Aprovado!')
}