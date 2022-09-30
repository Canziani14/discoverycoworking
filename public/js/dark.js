window.addEventListener('load', function () {
 /*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
let body = document.querySelector("body")
let sun = document.getElementById('id-moon')
let moon =  document.getElementById('id-sun')
document.getElementById('id-sun').onclick = function(){
  body.classList.add('soon-mode')
  sun.classList.remove('active')
  sun.classList.add('active')
  }
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id page y se aplicará el estilo active a la luna*/
  document.getElementById('id-moon').onclick = function(){
    body.classList.add('dark-mode')
    moon.classList.remove('active')
    moon.classList.add('active')
  }
})

