// Tipos de datos en Java Script

// Personalizacion de  salidas en consola
console.log("%c-- EJERCICIO 02: Tipos de datos en JavaScript --", style_console);

// 1 Underfined - Valor por defecto asignado a variables declaradas pero no inicializadas
console.warn("-- 1. Underfined --");
let usuariologeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores acrtuales de las variables:");
console.log("usuariologeado: ", usuariologeado);
console.log("rolUsuario: ", rolUsuario);
console.log("ultimoAcceso: ", ultimoAcceso);

/* En java script existe el metodo typeof() que nos devuelve el tipo de dato de una 
variable prefricamente declarada */

console.log("Tipos de datos de las variables:");
console.log("usuariologeado: ", typeof(usuariologeado));
console.log("rolUsuario: ", typeof(rolUsuario));
console.log("ultimoAcceso: ", typeof(ultimoAcceso));

/*Supongamos que un usuario dominado OliverSanchez se ha logeado exitosamente, el
valor de la variable debera actualizarce a su username */

usuaruiologeado = "OliverSanchez";

//pero no solo cambia el valor , tambien el tipo de dato

console.log('El valor de la variavle usuariologeado es: ${usuariologeado} y su tipo de dato es: ${typeof(usuariologeado)}');

// 2. Booleanos - Tipo de dato logico que puede tener dos valores true o false

function validarUsuarioLogeado() {
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que 
    es de tipo ${typeof (hayUsuarioLogeado)}`);

    if (hayUsuarioLogeado==true) 
        {
        console.log("Dado que se ha logeado un usuario la app mostrará el menu del usuario");
    } 
    else if (!hayUsuarioLogeado) 
    {
        console.log("Dado que no hay usuario logeado, la app mostrará el menú de usuario.");
    }
    else {
        console.log("No puedo procesar este tipo de dato, requerido de un booleano");
    }
}

// test1: usuario logueado = true
hayUsuarioLogeado = true;
console.log("Test 1")
validarUsuarioLogeado();

// test2: usuario logueado = false
hayUsuarioLogeado = false;
console.log("Test 2")
validarUsuarioLogeado();

// 3. test3: usuario logueado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogeado = 52.5;
validarUsuarioLogeado();

// 3. NUMBER (Numéricos)
console.warn("3.- NUMBER (NUMÉRICOS)");
/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros lenguajes de programación lo que un
ENTERO (INT), DLOTANTE (FLOAT), DECIMAL, DOBLE (DOUBLE), para el solo solo son NUMBER */

let userID_Owner = 225
let princeProperty = 125000.50
let latGPS = 20.240508
let longGPS = -97.952881
let altdGPS = 1180 // en metros sobre el nivel del mar

console.log(`Los valores de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario propietario: ${userID_Owner}
    Precio de la propiedad: $${princeProperty} USD
    Latitud (GPS): ${latGPS}
    Longitud (GPS): ${longGPS}
    Altitud (GPS): ${altdGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son: 
    ID del Usuario propietario: ${typeof(userID_Owner)}
    Precio de la propiedad: ${typeof(princeProperty)} 
    Latitud (GPS): ${typeof(latGPS)}
    Longitud (GPS): ${typeof(longGPS)}
    Altitud (GPS): ${typeof(altdGPS)}`);