window.addEventListener('load', function () {
    //Capturar el formulario 
    let formulario = document.getElementById('create');
    const ulErrores = document.getElementById('erroresFront');


    formulario.addEventListener('submit', function (evento) {
        if (!validaciones(evento)) {
            evento.preventDefault();
        } else {
            formulario.submit();
        }

        function validaciones(evento) {
            //Destructuring  
            let { name, details, services, price } = formulario.elements;
            let errores = [];

            if (name.value == '') {
                errores.push('El campo nombre no puede estar vacio...');
                name.classList.add('is-invalid');
                
            } else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');   
            }   

            //que tenga al menos 5 caracteres

            if (name.value.length <= 5) {
                errores.push('el nombre debe tener minimo 5 caracteres');
                name.classList.add('is-invalid');
                ulErrores.classList.add('showErrores');
            }  else {
                name.classList.add('is-valid');
                name.classList.remove('is-invalid');} 


            if (details.value == '') {
                errores.push('El campo details no puede estar vacio...');
                details.classList.add('is-invalid');
                
            } else {
                details.classList.add('is-valid');
                details.classList.remove('is-invalid');   
            }   

            if (details.value.length <= 20) {
                errores.push('el detalle debe tener minimo 20 caracteres');
                details.classList.add('is-invalid');
                ulErrores.classList.add('showErrores');
            }  else {
                details.classList.add('is-valid');
                details.classList.remove('is-invalid');} 

            if (services.value == '') {
                errores.push('El campo services no puede estar vacio...');
                services.classList.add('is-invalid');
                
            } else {
                services.classList.add('is-valid');
                services.classList.remove('is-invalid');   
            }   

            if (services.value.length <= 20) {
                errores.push('el detalle debe tener minimo 20 caracteres');
                services.classList.add('is-invalid');
                ulErrores.classList.add('showErrores');
            }  else {
                services.classList.add('is-valid');
                services.classList.remove('is-invalid');} 

             if (price.value == '') {
                errores.push('El campo price no puede estar vacio...');
                price.classList.add('is-invalid');
                
            } else {
                price.classList.add('is-valid');
                price.classList.remove('is-invalid');   
            }   

           // imgMembership
            if (imgMembership.value == '') {
                errores.push('El campo imagen no puede estar vacio...');
                price.classList.add('is-invalid');
                
            } else {
                imgMembership.classList.add('is-valid');
                imgMembership.classList.remove('is-invalid');   
            }   

            if (price.value.length > 100000) {
                //
                errores.push('el precio no puede ser mayo a 100.000');
                price.classList.add('is-invalid');
                ulErrores.classList.add('showErrores');
            }  else {
                price.classList.add('is-valid');
                price.classList.remove('is-invalid');} 




  //Aquí enviamos los errores al usuario
  if (errores.length > 0) {
      console.log('ERRORES: ',errores)
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