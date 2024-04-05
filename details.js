//document.addEventListener("DOMContentLoaded", function() {});

//para el carrito

document.addEventListener("DOMContentLoaded", function() {
    const botonAgregar = document.getElementById("agregarCarrito");
    const botonSumarCantidad = document.getElementById("sumarCantidad");
    const botonRestarCantidad = document.getElementById("restarCantidad");
    const cantidadProducto = document.getElementById("cantidadProducto");

    let cantidad = 1; // Inicializamos la cantidad del producto a 1

    // Event listener para el botón de agregar al carrito
    botonAgregar.addEventListener("click", function() {
        // Aquí puedes agregar la lógica para agregar el producto al carrito
        alert("Producto agregado al carrito");
    });

    // Event listener para el botón de aumentar cantidad
    botonSumarCantidad.addEventListener("click", function() {
        cantidad++;
        cantidadProducto.textContent = cantidad;
    });

    // Event listener para el botón de disminuir cantidad
    botonRestarCantidad.addEventListener("click", function() {
        if (cantidad > 1) {
            cantidad--;
            cantidadProducto.textContent = cantidad;
        }
    });
    const imagenesPequeñas = document.querySelectorAll('.lista-imagenes img');
        const imagenGrande = document.querySelector('.imagen-grande img');

        imagenesPequeñas.forEach(imgPequeña => {
            imgPequeña.addEventListener('click', () => {
                imagenGrande.src = imgPequeña.src;
                imagenGrande.alt = imgPequeña.alt;
            });
        });
});
