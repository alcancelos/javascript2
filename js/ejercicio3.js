var alumnos = [

    {

        nombre: 'Juan Gomez',

        nota: 7

    }, {

        nombre: 'Pedro Rodriguez',

        nota: 4

    }, {

        nombre: 'Roxana García',

        nota: 8

    }, {

        nombre: 'Luciano Lopez',

        nota: 5

    }, {

        nombre: 'Fernanda Gimenez',

        nota: 6

    }, {

        nombre: 'Florencia Martinez',

        nota: 10

    }, {

        nombre: 'Raul Sanchez',

        nota: 7

    }, {

        nombre: 'Sandra Figueroa',

        nota: 8

    }

];


let alumnosAprobados = alumnos.filter(x => x.nota >= 7)
let Alu = document.getElementById("Alumnos");
alumnosAprobados.forEach(element => Alu.innerHTML += '<p> <strong> Nombre: </strong>' + element.nombre + "<strong> Nota: </strong>" + element.nota + '</p>');

