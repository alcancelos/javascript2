
let Cuad1 = document.getElementById('Cuadrado1');
let Cuad2 = document.getElementById('Cuadrado2');
let Cuad3 = document.getElementById('Cuadrado3');
let Fondo = document.getElementById('FondoPagina');


function BorrarClases() {
    for (let i = 0; i <= Fondo.classList.length; i++) {
        Fondo.classList.remove(Fondo.classList[i])
    }
}


Cuad1.addEventListener('click', function () { CambiarFondo('Amarillo') });
Cuad2.addEventListener('click', function () { CambiarFondo('Verde') });
Cuad3.addEventListener('click', function () { CambiarFondo('Azul') });

function CambiarFondo(col) {

    BorrarClases();
    Fondo.classList.add(col)

}

