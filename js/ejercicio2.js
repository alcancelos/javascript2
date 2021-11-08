let TextArea = document.getElementById("Text");

let Resultado = document.getElementById("Cantidad");

TextArea.addEventListener('input', function () {

    let TextoIngresado = TextArea.value;
    Resultado.innerHTML = TextoIngresado.length;


});