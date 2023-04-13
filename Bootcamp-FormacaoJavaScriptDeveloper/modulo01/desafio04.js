/* 
Calcular o IMC (IMC = peso / (altura * altura))

Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acrodo com a tabela abaixo.
- abaixo de 18.5 = abaixo do peso
- entre 18.5 e 25 = peso normal
- entre 25 e 30 = acima do peso
- entre 30 e 40 = obeso
- acima de 40 obsidade grave
*/

const peso = 90
const altura = 1.75
const imc = peso / (altura ** 2)

if (imc < 18.5){
    console.log(`Seu IMC é ${imc.toFixed(2)}, tu está abaixo do peso`)
} else if (imc > 18.5 && imc <= 25){
    console.log(`Seu IMC é ${imc.toFixed(2)}, tu está normal`)
} else if (imc > 25 && imc <= 30){
    console.log(`Seu IMC é ${imc.toFixed(2)}, tu está acima do peso`)
} else if (imc > 30 && imc <= 40){
    console.log(`Seu IMC é ${imc.toFixed(2)}, tu está obeso`)
} else if (imc > 40){
    console.log(`Seu IMC é ${imc.toFixed(2)}, tu está gravemente obeso`)
}
