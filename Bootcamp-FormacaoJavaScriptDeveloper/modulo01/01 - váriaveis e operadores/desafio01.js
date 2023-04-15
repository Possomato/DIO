/* 
Faça um programa para calular o valor gasto de combustivel em uma viagem
*/

const preco = 5.05
const autonomia = 12
let km = 400
let valor = (parseFloat(km) / parseFloat(autonomia)) * parseFloat(preco)

console.log(`O valor da viagem é R$${valor.toFixed(2)}`)