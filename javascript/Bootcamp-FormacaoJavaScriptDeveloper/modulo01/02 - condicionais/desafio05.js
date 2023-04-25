/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Código condição de pagamento:
1 - crédito à vista, 10% de desconto
2 - dinheiro ou pix, 15% de desconto
3 - em 2x, preço normal
4 - acima de 2x, + 10% de juros
*/

const preco = 900
const metodo = 2

if (metodo == 1){
    novoPreco = preco - (preco * 0.10)
    console.log(`o valor a ser pago será R$${novoPreco}`)
} else if (metodo == 2){
    novoPreco = preco - (preco * 0.15)
    console.log(`o valor a ser pago será R$${novoPreco}`)
} else if (metodo == 3){
    console.log(`o valor a ser pago será R$${preco}`)
} else if (metodo == 4){
    novoPreco = preco + (preco * 0.10)
    console.log(`o valor a ser pago será R$${novoPreco}`)
}