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
                errores.push('El campo nombre no puede estar vacio...');
                name.classList.add('is-invalid');

            } else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');
            }

            
            if (name.value.length <= 2) {
                errores.push('El campo nombre debe tener mas de 2 caracteres...');
                name.classList.add('is-invalid');

            } else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');
            }

            
            if (email.value == '') {
                errores.push('El campo email no puede estar vacio...');
                email.classList.add('is-invalid');

            } else {
                email.classList.add('is-valid');
                email.classList.remove('is-invalid');
            }

            if (email.value.length <= 5) {
                errores.push('El campo email debe tener mas de 5 caracteres...');
                name.classList.add('is-invalid');

            } else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');
            }

            if (comments.value == '') {
                errores.push('El campo comments no puede estar vacio...');
                comments.classList.add('is-invalid');

            } else {
                comments.classList.add('is-valid');
                comments.classList.remove('is-invalid');
            }

            if (comments.value.length <= 10) {
                errores.push('El campo comments debe tener mas de 10 caracteres...');
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