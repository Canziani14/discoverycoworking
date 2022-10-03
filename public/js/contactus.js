window.addEventListener('load', function () {
    
    //Capturar el formulario 
    let formulario = document.getElementById('form');
    const ulErrores = document.getElementById('erroresFront');


    formulario.addEventListener('submit', function (evento) {
        if (!validaciones(evento)) {
            evento.preventDefault();
        } else {
            formulario.submit();
        }

        function validaciones(evento) {
            //Destructuring  
            let { name, email, comments } = formulario.elements;
            let errores = [];

            if (name.value == '') {
                errores.push('The name field cannot be empty.');
                name.classList.add('is-invalid');

            } else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');
            }

            
            if (name.value.length <= 2) {
                errores.push('The name field must have more than 2 characters.');
                name.classList.add('is-invalid');

            } else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');
            }

            
            if (email.value == '') {
                errores.push('The email field cannot be empty.');
                email.classList.add('is-invalid');

            } else {
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
            }

            if (email.value.length <= 5) {
                errores.push('The email field must have more than 5 characters...');
                name.classList.add('is-invalid');

            } else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');
            }

            if (comments.value == '') {
                errores.push('The comments field cannot be empty.');
                comments.classList.add('is-invalid');

            } else {
                comments.classList.add('is-valid');
                comments.classList.remove('is-invalid');
            }

            if (comments.value.length <= 10) {
                errores.push('The comment must be at least 10 characters long.');
                name.classList.add('is-invalid');

            } else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');
            }


            //Aquí enviamos los errores al usuario
            if (errores.length > 0) {
                console.log('ERRORES: ', errores)
                ulErrores.classList.add('show')
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