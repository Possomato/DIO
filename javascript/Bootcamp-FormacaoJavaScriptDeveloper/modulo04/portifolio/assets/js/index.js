const botaoIdioma = document.querySelector('.botaoIdioma')
const botaoProjeto = document.querySelector('.botaoProjeto')
const botaoSkill = document.querySelector('.botaoSkill')
const botaoExperiencia = document.querySelector('.botaoExperiencia')
const botaoEducacao = document.querySelector('.botaoEducacao')

let aberto = false

botaoSkill.addEventListener('click', function(){
  if (aberto){
    botaoSkill.classList.remove('open')
    aberto = false
  } else{
    botaoSkill.classList.add('open')
    aberto = true
  }
})


botaoIdioma.addEventListener('click', function(){
  if (aberto){
    botaoIdioma.classList.remove('open')
    aberto = false
  } else{
    botaoIdioma.classList.add('open')
    aberto = true
  }
})

botaoProjeto.addEventListener('click', function(){
  if (aberto){
    botaoProjeto.classList.remove('open')
    aberto = false
  } else{
    botaoProjeto.classList.add('open')
    aberto = true
  }
})

botaoExperiencia.addEventListener('click', function(){
  if (aberto){
    botaoExperiencia.classList.remove('open')
    aberto = false
  } else{
    botaoExperiencia.classList.add('open')
    aberto = true
  }
})

botaoEducacao.addEventListener('click', function(){
  if (aberto){
    botaoEducacao.classList.remove('open')
    aberto = false
  } else{
    botaoEducacao.classList.add('open')
    aberto = true
  }
})