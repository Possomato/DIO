// Crie um programa que seja capaz de percorrer uam list de números e imprama cada número par encontrado

const numeros = [0, 12, 412, 4432, 678, 3423, 23, 42, 1, 98539]

for (let i = 0; i < numeros.length; i++) {
    numero = numeros[i];
    if(numero % 2 == 0){
        console.log(numero)
    }
}