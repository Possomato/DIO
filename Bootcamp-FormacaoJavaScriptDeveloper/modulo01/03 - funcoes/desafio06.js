/* 
Calcular o IMC (IMC = peso / (altura * altura))

Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acrodo com a tabela abaixo.
- abaixo de 18.5 = abaixo do peso
- entre 18.5 e 25 = peso normal
- entre 25 e 30 = acima do peso
- entre 30 e 40 = obeso
- acima de 40 obsidade grave

(fazer com function)
*/

function calcularImc(peso, altura){
    return peso / (altura ** 2)
}

function classificarImc(imc){
    if (imc < 18.5){
        return `Seu IMC é ${imc.toFixed(2)}, tu está abaixo do peso`
    } else if (imc > 18.5 && imc <= 25){
        return `Seu IMC é ${imc.toFixed(2)}, tu está normal`
    } else if (imc > 25 && imc <= 30){
        return `Seu IMC é ${imc.toFixed(2)}, tu está acima do peso`
    } else if (imc > 30 && imc <= 40){
        return `Seu IMC é ${imc.toFixed(2)}, tu está obeso`
    } else if (imc > 40){
        return `Seu IMC é ${imc.toFixed(2)}, tu está gravemente obeso`
    }
}

function main(){
    const peso = 75
    const altura = 1.75
    const imc = calcularImc(peso, altura)
    
    calcularImc(90, 1.75)
    console.log(classificarImc(imc))
}

main()
