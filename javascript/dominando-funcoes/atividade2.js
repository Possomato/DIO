function calcularIdade(anos){
    return `Daqui ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa01 = {
    nome: 'Gabriel',
    idade: 20,
}

const pessoa02 = {
    nome: 'Rute',
    idade: 44,
}

const pessoa03 = {
    nome: 'Leandro',
    idade: 46,
}

console.log(calcularIdade.apply(pessoa01, [10]))