// Obtengo cada elemento por su ID
let Cuad1 = document.getElementById('Cuadrado1');
let Cuad2 = document.getElementById('Cuadrado2');
let Cuad3 = document.getElementById('Cuadrado3');
let Fondo = document.getElementById('FondoPagina');

// Funcion para borrar las clases del elemento Fondo, asi no se me acumulan muchas clases
// si cambio mucho de color
function BorrarClases() {
    for (let i = 0; i <= Fondo.classList.length; i++) {
        Fondo.classList.remove(Fondo.classList[i])
    }
}

// Escucho el evento click de cada cuadrado, y llamo a la funcion cambiar fondo,
// le paso el nombre de la clase que debo agregar al fondo
Cuad1.addEventListener('click', function () { CambiarFondo('Amarillo') });
Cuad2.addEventListener('click', function () { CambiarFondo('Verde') });
Cuad3.addEventListener('click', function () { CambiarFondo('Azul') });

// Funcion para cambiar el fondo del body. Primero borro las clases,
// luego le agrega la clase que llega por parametro.
function CambiarFondo(col) {

    BorrarClases();
    Fondo.classList.add(col)

}

