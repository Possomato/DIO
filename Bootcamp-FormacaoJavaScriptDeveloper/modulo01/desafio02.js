/* 
Faça um programa para calular o valor de uma viagem

- preço do etanol
- preço da gasolina
- o tipo de combustível que está no carro
- autonomia do carro
- distancia em km da viagem

imprima no console o valor que sera gasto para realizar esta viagem
*/

const precoGasolina = 5.05
const precoEtanol = 4.72
const autonomia = 12
const combustivel = 'etanol'
const km = 400

if (combustivel === 'gasolina'){
    let valor = (parseFloat(km) / parseFloat(autonomia)) * parseFloat(precoGasolina)
    console.log(`O valor da viagem é R$${valor.toFixed(2)}`)
} else if (combustivel === 'etanol'){
    let valor = (parseFloat(km) / parseFloat(autonomia)) * parseFloat(precoEtanol)
    console.log(`O valor da viagem é R$${valor.toFixed(2)}`)
} else{
    console.log('combustível não identificado, escolha entre [gasolina/etanol]')
}
