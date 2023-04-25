/* 
    crie uma classe para representar carros
    os carros possuem uma marca, uma cor e um gasto médio de combustível por km, dessenvolva um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizer esse percurso
*/

class Carro{
    marca
    cor
    autonomia

    constructor(marca, cor, autonomia) {
        this.marca = marca
        this.cor = cor
        this.autonomia = autonomia
    }

    gastoViagem(distancia, precoCombustivel){
        return distancia * this.autonomia * precoCombustivel
    }
}

const M3 = new Carro('BMW', 'azul', 1/5)
const golf = new Carro('VolksWagen', 'branco', 1/12)
console.log(M3.gastoViagem(90, 5.05))
console.log(golf.gastoViagem(90, 5.05))