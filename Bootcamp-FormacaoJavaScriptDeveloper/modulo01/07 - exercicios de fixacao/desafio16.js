/*
Faça um programa que calcula e imprima o salario a ser transferido para um funcionário.
*Para ralizar o cálculo receba o valor bruto do solário e o adicional dos benefícios 
*Valor bruto - percentual de imposto

aliquotas:
- 0 a 1100 = 5%
- 1100 a 2500 = 10%
- acima de 2500 = 15%
*/

const {gets, print} = require('./desafio16funcoes')

const salarioBruto = gets()
const beneficios = gets()

function calcularPercentual(salario, percentual) {
    return salario * (percentual / 100);
}

function calcularDesconto(salario){
    if (salario > 0 && salario <= 1100){
        return 5;
    } else if (salario > 1100 && salario <= 2500){
        return 10;
    } else{
        return 15;
    }
}

const salarioFinal = salarioBruto - (calcularPercentual(salarioBruto, calcularDesconto(salarioBruto))) + beneficios

print(salarioFinal)