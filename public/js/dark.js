window.addEventListener('load', function () {
 /*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/


let body = document.querySelector("body")
let sun = document.getElementById('id-moon')
let moon =  document.getElementById('id-sun')

function saveData(name) {
  localStorage.clear()
  localStorage.setItem(name, "true")
}


document.getElementById('id-sun').onclick = function(){
  body.classList.add('soon-mode')
  body.classList.remove('dark-mode')
  moon.classList.remove('active')
  sun.classList.add('active')
  saveData('soon-mode')
  }
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id page y se aplicará el estilo active a la luna*/
  document.getElementById('id-moon').onclick = function(){
    body.classList.add('dark-mode')
    body.classList.remove('sun-mode')
    sun.classList.remove('active')
    moon.classList.add('active')
    saveData('dark-mode')
  }

 if (localStorage.getItem("dark-mode")==="true") {
    body.classList.remove('sun-mode')
    body.classList.add('dark-mode')
    sun.classList.remove('active')
    moon.classList.add('active')
 }

})

