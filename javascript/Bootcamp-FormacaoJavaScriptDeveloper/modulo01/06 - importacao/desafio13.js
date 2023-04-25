/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100. Receba os 5 números sorteados para os alunos e mostre o maior número sorteado

dados de entreda:
-5
-50
-10
-98
-23

dados de saida:
-98
*/

const {gets, print} = require('./desafio13funcoes')

const numerosSorteado = []

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteado.push(numeroSorteado);
}

let maiorValor = -1

for (let i = 0; i < numerosSorteado.length; i++) {
    const numeroSorteado = numerosSorteado[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

print(maiorValor)