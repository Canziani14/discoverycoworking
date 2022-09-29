//const db = require("../../src/database/models");

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

            let erroresEmail = [];
            let erroresPassword = [];
            //que no este vacio
            if (email.value == '') {
                errores.push('El campo email no puede estar vacio');
                erroresEmail.push('1');
            }
            
            //que no sea invalido el email (con el tipo de input email ya lo valida igual)
            if ( email.value.length > 0 && !reEmail.test(email.value)) {
                errores.push('El email es inválido...');
                erroresEmail.push('2');
            }





            //que la clave no este vacia

            if (password.value == '') {
                errores.push('El campo password no puede estar vacio');
                erroresPassword.push('1');
            }

            //que la contraseña tenga minimo 6 caracteres
            let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            if ( password.value.length >1 &&password.value.length < 6) {
                errores.push('La contraseña como mínimo debe tener seis caracteres');
                erroresPassword.push('2');
            }


            /*  
                db.User.findAll()
                .then ( function(user) {
                 console.log("los usuarios",user)
                    if (user.email != req.body.email) {
                        errores.push('El email no esta registrado en la base de datos...');
                        email.classList.add('is-invalid');
                        ulErrores.classList.add('showErrores')
                    }  else {
                        email.classList.add('is-valid');
                        email.classList.remove('is-invalid');
                    }
                })*/

            //Aquí enviamos los errores al usuario

            if(erroresEmail.length >0){
                email.classList.add('is-invalid');
                email.classList.remove('is-valid');
                ulErrores.classList.add('showErrores');
            }
            else{
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');

            }

            
            if(erroresPassword.length >0){
                password.classList.add('is-invalid');
                password.classList.remove('is-valid');
                ulErrores.classList.add('showErrores');
            }
            else{
                password.classList.remove('is-invalid');
                password.classList.add('is-valid');
            }

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