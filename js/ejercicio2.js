//Obtengo el elemento TextArea por id
let TextArea = document.getElementById("Text");
//Obtengo el elemento resultado, donde voy a mostrar la cantidad de caracteres
let Resultado = document.getElementById("Cantidad");
//Escucho el evento input en el textarea y llamo a la funcion que muestra la cantidad de 
//caracteres en el elemento Resultado
TextArea.addEventListener('input', function () {
    let TextoIngresado = TextArea.value;
    Resultado.innerHTML = TextoIngresado.length;
});