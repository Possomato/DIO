/* 
Faça um algoritmo que dado as 3 notas tirados por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme a tabela abaixo

- < 5, reprovação
- >= 5 e 7, recuperação
- >7, aprovado
*/

const nota1 = 7.5
const nota2 = 1
const nota3 = 2.5
const media = (nota1 + nota2 + nota3) / 3

if (media < 5){
    console.log(`Sua nota foi ${media.toFixed(2)} - REPROVADO!`)
} else if (media >= 5 && media <= 7){
    console.log(`Sua nota foi ${media.toFixed(2)} - Em recuperação.`)
} else{
    console.log(`Sua nota foi ${media.toFixed(2)}! APROVADO!`)
}