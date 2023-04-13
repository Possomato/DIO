/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Código condição de pagamento:
- crédito à vista, 10% de desconto
- dinheiro ou pix, 15% de desconto
- em 2x, preço normal
- acima de 2x, + 10% de juros
*/

const preco = 900
const metodo = 'crédito'
const parcelas = 4

if (metodo == 'pix' || metodo == 'dinheiro'){
    novoPreco = preco - (preco * 0.15)
    console.log(`O valor a ser pago será R$${novoPreco}`)
} else if(metodo == 'crédito' && parcelas == 1){
    novoPreco = preco - (preco * 0.10)
    console.log(`O valor a ser pago será R$${novoPreco}`)
} else if(metodo == 'crédito' && parcelas == 2){
    console.log(`O valor a ser pago será R$${preco}`)
} else if(metodo == 'crédito' && parcelas > 2){
    novoPreco = preco + (preco * 0.10)
    console.log(`O valor a ser pago será R$${novoPreco}`)
}
