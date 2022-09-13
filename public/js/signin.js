
    //Capturar el formulario 
    let formulario = document.querySelector('.form');
    //console.log(formulario.elements.email.value);
    formulario.addEventListener('submit', function (evento) {
        if (!validaciones(evento)) {
            evento.preventDefault();
        } else {
            formulario.submit();
        }

        function validaciones(evento) {
            //Destructuring  
            let { userName, userLastName, userEmail, password, confirmPassword,avatar } = formulario.elements;
            let errores = [];
            console.log(formulario.elements.confirmPassword.value);
            //Validar Nombre
            if (userName.value == '') {
                errores.push('El campo nombre no puede estar vacio...');
                userName.classList.add('is-invalid');
                //errores['userName'] = 'El campo nombre no puede estar vacio...';
            } else {
                userName.classList.add('is-valid');
                userName.classList.remove('is-invalid');            }

            //Validar Apellido
            if (userLastName.value == '') {
                errores.push('El campo apellido no puede estar vacio...');
                userLastName.classList.add('is-invalid');
                //errores['userLastName'] = 'El campo nombre no puede estar vacio...';
            } else {
                userLastName.classList.add('is-valid');
                userLastName.classList.remove('is-invalid');
            }
            //Validar el email - Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       https://stackoverflow.com/questions/46155/how-to-validate-an-email-toggleress-in-javascript
            let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (!reEmail.test(userEmail.value)) {
                errores.push('El userEmail es inválido...');
                email.classList.add('is-invalid');                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            } else {
                userEmail.classList.add('is-valid');
                userEmail.classList.remove('is-invalid');
            }
            //Aquí valido el password haciendo uso de Expresiones Regulares
            //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
            let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            if (!rePassword.test(password.value) && password.length < 6) {
                errores.push('La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número');
                password.classList.add('is-invalid');

                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            } else {
                password.classList.add('is-valid');
                password.classList.remove('is-invalid');
            }
            //Aquí valido a que la confirmación del password no llegue vacia
            if (confirmPassword.value == ""  && confirmPassword.length < 6) {
                errores.push('La confirmación de la contraseña no puede estar vacia');
                confirmPassword.classList.add('is-invalid');

            } else {
                //Ahora valido si las dos contraseñas son iguales
                if (password.value != confirmPassword.value && confirmPassword != "") {
                    errores.push('Las contraseñas deben ser iguales');
                    confirmPassword.classList.add('is-invalid');
                    //errores['last_name'] = 'El campo nombre no puede estar vacio...';
                } else {
                    confirmPassword.classList.add('is-valid');
                    confirmPassword.classList.remove('is-invalid');

                }
            }
            //Aquí valido que el usuario coloque su avatar (Yo en mi caso lo considero como un dato obligatorio, ustedes si quieren lo validan como deseen)
            if (avatar.value == '') {
                errores.push('Debe seleccionar su avatar en formato JPG - PNG ó JPEG');
                avatar.classList.add('is-invalid');
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            } else {
                avatar.classList.add('is-valid');
                avatar.classList.remove('is-invalid');
            }

            //Aquí enviamos los errores al usuario
            let ulErrores = document.getElementById('erroresFront');
            ulErrores.classList.add('alert-danger')
            if (errores.length > 0) {
                console.log('ERRORES: ',errores)
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