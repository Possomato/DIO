const botaoIdioma = document.querySelector('.botaoIdioma')
const botaoProjeto = document.querySelector('.botaoProjeto')
const botaoSkill = document.querySelector('.botaoSkill')
const botaoExperiencia = document.querySelector('.botaoExperiencia')
const botaoEducacao = document.querySelector('.botaoEducacao')

let aberto = false

function alterarOpen (elemento) {
  if(aberto){
    elemento.classList.remove('open')
    aberto = false
  } else{
    elemento.classList.add('open')
    aberto = true
  }
}

botaoSkill.addEventListener('click', function(){
  alterarOpen(botaoSkill)
})


botaoIdioma.addEventListener('click', function(){
  alterarOpen(botaoIdioma)
})

botaoProjeto.addEventListener('click', function(){
  alterarOpen(botaoProjeto)
})

botaoExperiencia.addEventListener('click', function(){
  alterarOpen(botaoExperiencia)
})

botaoEducacao.addEventListener('click', function(){
  alterarOpen(botaoEducacao)
})