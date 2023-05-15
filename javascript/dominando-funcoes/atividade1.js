alunos = [
    {
        nome: 'Guilherme',
        nota: 7,
        sala: '3B',
    },
    {
        nome: 'Gabriel',
        nota: 9,
        sala: '3A'
    },
    {
        nome: 'Rafael',
        nota: 3,
        sala: '3C',
    },
    {
        nome: 'Miguel',
        nota: 8,
        sala: '2A',
    }
]

function alunosAprovados(arr, media) {
    let aprovados = []

    for (let i = 0; i < arr.length; i++) {
        
        const {nota, nome} = arr[i]

        if (nota >= media){
            aprovados.push(nome)
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 5))