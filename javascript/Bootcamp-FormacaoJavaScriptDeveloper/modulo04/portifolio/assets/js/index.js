const botaoIdioma = document.querySelector('.botaoIdioma')
const botaoProjeto = document.querySelector('.botaoProjeto')
let aberto = false

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