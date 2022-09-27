/// JS REFERIDO A TODAS LAS FUNCIONALIDADES Y TEMAS VISUALES AGREGANDO PRODUCTOS AL CARRITO FUERA DE LA VISTA DE CARRITO
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
}

function ready() {
    // EN CASO DE NO EXISTIR EN MEMORIA EL ARRAY DE PRODUCTOS LO CREAREMOS ENVIANDO UN ARRAY VACIO
    if(JSON.parse(localStorage.getItem("productosEnCarrito")) == null) {
        let cart = []
        localStorage.setItem("productosEnCarrito", JSON.stringify(cart))
    }

    let button = document.querySelector("#btnMember") // CAPTURAMOS EL BOTON QUE AGREGARÁ PRODUCTOS AL CARRITO
    button.addEventListener("click", (e) => { 
        // AÑADIMOS EL EVENTO CLICK A DICHO BOTON PARA QUE UNA VEZ QUE OCURRRA EJECUTEMOS LA FUNCIÓN DE AGREGAR
        // EN CONJUNTO A UN SWEETLERT INDICANDOLE AL USUARIO QUE EL PRODUCTO SE AGREGÓ CON ÉXITO                           
        agregarItem()
        Swal.fire(
            'Exito!',
            'Producto agregado al carrito!',
            'success'
        )
    })













}