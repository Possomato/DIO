// Atividade02 - Verificar números impares em um array e substituir por 0, se o array estiver vazio retornar -1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numerosFormatados = []

if (numeros.length === 0){
    numerosFormatados.push(-1)
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0){
        numerosFormatados.push(0)
    } else{
        numerosFormatados.push(numeros[i])
    }
}

console.log(numerosFormatados.join(', '));

