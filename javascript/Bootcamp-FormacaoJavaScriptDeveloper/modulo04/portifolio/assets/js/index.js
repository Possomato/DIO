const botao = document.querySelector('.acordeon')
let aberto = false

botao.addEventListener('click', function(){
  if (aberto){
    botao.classList.remove('open')
    aberto = false
  } else{
    botao.classList.add('open')
    aberto = true
  }
})