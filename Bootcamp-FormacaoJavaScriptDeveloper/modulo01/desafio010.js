/* 
    crie uma classe para representar pessoas
    - cada pessoa com: nome, peso e altura
    - calcule o IMC
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura ** 2)
    }
    classificarImc(){
        const imc = this.calcularImc()
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
}

const jose = new Pessoa('José', 70, 1.75)
console.log(jose, jose.classificarImc())
