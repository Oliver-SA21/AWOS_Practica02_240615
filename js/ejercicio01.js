// Comentario de una sola linea

/* Comentario
....
multilinea
*/

//EJERCICIO 01: DEclaracion de variables en JavaScript
// 1. Utilizando la palabra reservada var

//Utilizamos el metodo WARN para estilizar las respuestas de las pruebas realizadas a 
// nuestro codigo y facilitar su revicion

var miNombre = "Oliver Sanchez Arrioja";
console.log("El valor almacenado en la variable miNombre es: ", miNombre);

//Modificacion de la variable miNombre
miNombre = "Oliver";
console.log("El nuevo valor almacenado en la variable miNombre es: ", miNombre);

var misApellidos;
console.log("El valor almacenado en la variable misApellidos es: ", misApellidos); // undefined
// Una variable puede cambiar su valor durante la ejecucion del programa

console.warn("-- Declarracion de una Constante utilizando el prefijo const --");

// Una constante a diferencia de una variable es que su valor no cambiara durante la ejecucion del programa, 
// y debera ser inicializada obligatoriamente

const matricula = "240615";
console.log("El valor almacenado en la constante matricula es: ", matricula);

//3. Utilizando la palabra reservada LET
//lET es el prefijo utilizado muy similar a VAR con la diferencia que en su alcance (SCOPE),
//aquellas declaradas con VAR tienen un alcance global en el codigo no importando bloques o 
//secciones, mientras que las variables declaradas ccon LET solo existirian dentro del bloque o función.

var fechaNacimiento = new Date(2006,6,12);
var miEdad =calcularEdad(fechaNacimiento);
console.log("Tu edad es de: ", miEdad, " años.");


//Verificamps si es mayor de edad
if (miEdad >= 18){
    var esMayorDeEdad = true;
    let esMenorDeEdad = false;
} 


if (esMayorDeEdad){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


//console.log("El valor de esMenorDeEdad es: ", esMenorDeEdad);
//La variable booleana no puede persisitir por el tipo de declaración con LET, solo fue de alcance local mientras
//el condicional (IF) se encontraba en ejecución.

function calcularEdad(fechaNacimiento) {
    //Para calcular la edad requeremos la fecha del día de hoy
    var fechaHoy = new Date();

    //Dado que los datos de fecha son almacenados en milisegundos por default en 
    //JavaScript, necesitamos una variable que nos permita saber el numero de milisegundos por día 

    let milisegundosPorDia = 24*60*60*1000;

    //ya que tenemos los milisegundos por día tenemos que restar a la fecha de hoy, la fecha en que nacimos para calcular
    //los milisegundos que hemos vivido
    let diaVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    //Invocamos el modo matematico de la función piso (FLOOR)
    var edad = diaVividos/365.25;
    edad = Math.floor(edad);

    return edad;
}



//Interpolación de datos 

//$ {} `
misApellidos = "Sanchez Arrioja";
console.log(`Hola, ${miNombre} ${misApellidos}, actualmente tienes ${miEdad} años.`);


//Autor: Oliver Sanchez Arrioja