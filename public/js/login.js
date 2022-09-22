const db = require("../../src/database/models");

window.addEventListener('load', function () {
const ulErrores = document.getElementById('erroresFront');

    //Capturar el formulario 
    let formulario = document.querySelector('.form');
    //console.log(formulario.elements.email.value);
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault()
        if (!validaciones(evento)) {
            evento.preventDefault();
        } else {
            formulario.submit();
        }

        function validaciones(evento) {
            //Destructuring  
            let { email, password } = formulario.elements;
            let errores = [];
            let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if (email.value == '') {
                errores.push('El campo email no puede estar vacio');
                email.classList.add('is-invalid');
                ulErrores.classList.add('showErrores');
            } else {
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');}
            
            if (!reEmail.test(email.value)) {
                errores.push('El email es inválido...');
                email.classList.add('is-invalid');
                ulErrores.classList.add('showErrores')
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            } else {
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
            }
/*
            db.User.findAll()
            .then ( function(user) {
                if (user.email != req.body.email) {
                    errores.push('El email no esta registrado en la base de datos...');
                    email.classList.add('is-invalid');
                    ulErrores.classList.add('showErrores')
                }  else {
                    email.classList.add('is-valid');
                    email.classList.remove('is-invalid');
                }
            })
*/
            //Aquí valido el password haciendo uso de Expresiones Regulares
            //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
          // let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            if(password.value.length<6){
                errores.push('La contraseña como mínimo debe tener seis caracteres');
                password.classList.add('is-invalid');
                ulErrores.classList.add('showErrores')
            }
            else {
                password.classList.add('is-valid');
                password.classList.remove('is-invalid');
            }

            if (password.value == '') {
                password.push('El campo password no puede estar vacio');
                email.classList.add('is-invalid');
                ulErrores.classList.add('showErrores');
            } else {
                password.classList.add('is-valid');
                password.classList.remove('is-invalid');}

            //Aquí enviamos los errores al usuario


            if (errores.length > 0) {

                evento.preventDefault();
                ulErrores.innerHTML = "";
                for (let i = 0; i < errores.length; i++) {
                    ulErrores.innerHTML += `<p> ${errores[i]} </p> `
                }
                errores = [];
            } else {
                return true;
            }
        }
    })
})