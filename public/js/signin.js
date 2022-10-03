
//Capturar el formulario 
let formulario = document.querySelector('.form');
const ulErrores = document.getElementById('erroresFront');

formulario.addEventListener('submit', function (evento) {
    if (!validaciones(evento)) {
        evento.preventDefault();
    } else {
        formulario.submit();
    }

    function validaciones(evento) {
        //Destructuring  
        let { userName, userLastName, userEmail, password, confirmPassword, avatar } = formulario.elements;
        let errores = [];
        console.log(formulario.elements.confirmPassword.value);


        //VALIDACION NOMBRE

        //Validar que el nombre no este vacio
        if (userName.value == '') {
            errores.push('The name field cannot be empty.');
            userName.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');
        } else {
            userName.classList.add('is-valid');
            userName.classList.remove('is-invalid');
        }

        //preguntamos si tiene mas de 2 caracteres

        if (userName.value.length <= 2) {
            errores.push('The name must have at least 2 characters.');
            userName.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');
        } else {
            userName.classList.add('is-valid');
            userName.classList.remove('is-invalid');
        }


        //VALIDACION APELLIDO

        //Validar que el apellido no este vacio
        if (userLastName.value == '') {
            errores.push('The lastName field cannot be empty.');
            userLastName.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');

        } else {
            userLastName.classList.add('is-valid');
            userLastName.classList.remove('is-invalid');
        }
        //preguntamos si tiene mas de 2 caracteres
        if (userLastName.value.length <= 2) {
            errores.push('The lastName must have at least 2 characters.');
            userName.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');
        } else {
            userName.classList.add('is-valid');
            userName.classList.remove('is-invalid');
        }


        //VALIDACION EMAIL

        //validamos el email
        let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!reEmail.test(userEmail.value)) {
            errores.push('The email is invalid.');
            email.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');

        } else {
            userEmail.classList.add('is-valid');
            userEmail.classList.remove('is-invalid');
        }


        //VALIDAMOS CONTRASEÑA

        //validamos que la contraseña no este vacia
        /*  if (password.value == "") {
              errores.push('La contraseña no puede estar vacia');
              password.classList.add('is-invalid');
              ulErrores.classList.add('showErrores');
          } else {
              password.classList.add('is-valid');
              password.classList.remove('is-invalid');
          }*/

        //validamos que la contraseña tenga mas de 6 caracteres      
        let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

        if (password.length < 6) {
            errores.push('The password must be at least 6 characters.');
            password.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');

        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }


        //VALIDAMOS CONFIRMACION DE CONTRASEÑA

        //validamos que la confirmacion de la clave sea tenga mas de 6 caracteres
        if (confirmPassword.value.length < 6) {
            errores.push('The password confirm must be at least 6 characters.');
            confirmPassword.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');
        } else {
            confirmPassword.classList.add('is-valid');
            confirmPassword.classList.remove('is-invalid');
        }

        //Aquí valido a que la confirmación del password no llegue vacia
        /* if (confirmPassword.value == "") {
             errores.push('La confirmación de la contraseña no puede estar vacia');
             confirmPassword.classList.add('is-invalid');
             ulErrores.classList.add('showErrores');
         } else {
             confirmPassword.classList.add('is-valid');
             confirmPassword.classList.remove('is-invalid');
         }*/

        //VALIDAMOS CONTRASEÑA Y LA CONFIRMACION DE CONTRASEÑA


        //Ahora valido si las dos contraseñas son iguales
        if (password.value != confirmPassword.value) {
            errores.push('Passwords must be the same.');
            confirmPassword.classList.add('is-invalid');
            password.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');

        } else {
            confirmPassword.classList.add('is-valid');
            confirmPassword.classList.remove('is-invalid');
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }

        if (password.value == confirmPassword.value && confirmPassword.value == "" && password.value == "") {
            errores.push('Password and confirmation cannot be empty.');
            confirmPassword.classList.add('is-invalid');
            password.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');

        } else {
            confirmPassword.classList.add('is-valid');
            confirmPassword.classList.remove('is-invalid');
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }

        //Aquí valido que el usuario coloque su avatar (Yo en mi caso lo considero como un dato obligatorio, ustedes si quieren lo validan como deseen)
        if (avatar.value == '') {
            errores.push('You must select your avatar in JPG - PNG or JPEG format.');
            avatar.classList.add('is-invalid');
            ulErrores.classList.add('showErrores');

        } else {
            avatar.classList.add('is-valid');
            avatar.classList.remove('is-invalid');
        }

        //Aquí enviamos los errores al usuario

        if (errores.length > 0) {
            console.log('ERRORES: ', errores)
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
