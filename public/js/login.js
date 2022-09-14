window.addEventListener('load', function () {

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
            if (!reEmail.test(email.value)) {
                errores.push('El email es inválido...');
                email.classList.add('is-invalid');
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            } else {
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
            }
            //Aquí valido el password haciendo uso de Expresiones Regulares
            //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
          // let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            if(password.value<6){
                errores.push('La contraseña como mínimo debe tener seis caracteres');
            }

           /* if (!rePassword.test(password.value)) {
                errores.push('La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número');
                password.classList.add('is-invalid');
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';*/
            else {
                password.classList.add('is-valid');
                password.classList.remove('is-invalid');
            }

            //Aquí enviamos los errores al usuario
            let ulErrores = document.getElementById('errores');
            ulErrores.classList.add('alert-danger')
            if (errores.length > 0) {

                evento.preventDefault();
                ulErrores.innerHTML = "";
                for (let i = 0; i < errores.length; i++) {
                    ulErrores.innerHTML += `<li> ${errores[i]} </li> `
                }
                errores = [];
            } else {
                return true;
            }
        }
    })
})