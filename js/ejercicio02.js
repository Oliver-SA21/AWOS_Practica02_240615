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

// 4. STRING (Cadenas de texto)
var fullnameOwner = "Oliver Sánchez";
let nameProperty = "Hermosa casa en la playa de Puerto Vallarta";
let descriptionProperty = "Hermosa casa de 3 recámaras, 2 baños, cocina equipada, alberca y vista al mar.";
var statusProperty = "Disponible";
const typeProperty = "C";
var addressProperty;

/* Los tipos de datos String son palabras, valores cualitativos de las entidades de nuestra
aplicación, que no tienen un tamaño máximo y que están conformadas por caracteres alfabéticos,
caracteres especiales como acentos o símbolos de algún idioma. */

console.warn("4.- STRING (Cadenas de texto)");
console.log(`El usuario: ${fullnameOwner} está vendiendo o rentando: ${nameProperty}.
Que consiste en: ${descriptionProperty}.
Actualmente la propiedad se encuentra: ${statusProperty}, del tipo: ${typeProperty}.`);

// Manipulando Strings

// Transformar a mayúsculas
console.log(`Nombre del propietario: ${fullnameOwner.toUpperCase()}`);

// Transformar a minúsculas
console.log(`Descripción de la propiedad: ${descriptionProperty.toLowerCase()}`);

// Número de caracteres
console.log(`Número de letras en el tipo de propiedad: ${typeProperty.length}`);

// Subcadenas (ejemplo: extraer apellido)
console.log(`Apellido del propietario: ${fullnameOwner.slice(7)}`);

// Eliminar espacios en blanco
console.log(`Nombre de la propiedad (sin espacios al inicio/fin): ${nameProperty.trim()}`);

// Reemplazar texto
console.log(`Descripción modificada: ${descriptionProperty.replace("3 recámaras", "4 recámaras")}`);

// Reemplazar todos (con toLowerCase para que sí encuentre "casa")
console.log(
  `Descripción modificada: ${descriptionProperty.toLowerCase().replaceAll("casa", "propiedad")}`
);


//5. BIGINT (Emntero de grandes dimensiones)

/*Este tipo de dato permite almacenar numeros exageradamente amplios que usualmente aplicaciones
científicas avanzadas requieren, esto para no perder presición en los valores almacenados. */
const numeroGrande = 12134567890;
let numeroGrande2 = 1213456789012134567890;
let numeroGrande3 = 121345678901213456789012134567890;
let numeroGrande4 = 12134567890121345678901213456789012134567890;

console.warn("5.- BIGINT (Enteros de gran tamaño)");
console.log(`El valor de numeroGrande es: ${numeroGrande} y es soportado por: ${typeof (numeroGrande)}`);
console.log(`El valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por: ${typeof (numeroGrande2)} comienza
a sufrir problemas de presicion`);
console.log(`El valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser soportado por: ${typeof (numeroGrande3)} comienza
a sufrir problemas de presicion`);
console.log(`El valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser soportado por: ${typeof (numeroGrande4)} comienza
a sufrir problemas de presicion`);

numeroGrande2 = BigInt(1213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por: ${typeof (numeroGrande2)} comienza a sufrir problemas de presicion`);
numeroGrande3 = BigInt(121345678901213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser soportado por: ${typeof (numeroGrande3)} comienza a sufrir problemas de presicion`);
numeroGrande4 = BigInt(12134567890121345678901213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser soportado por: ${typeof (numeroGrande4)} comienza a sufrir problemas de presicion`);

// 6. SYMBOL (Símbolos)
console.warn("6.- SYMBOL (Símbolos)");

const numero1 = 4;
const numero2 = 4.0;
const numero3 = "4";
const numero4 = "4.0";

const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

console.log(`Valores y tipos:
numero1 - valor: ${numero1}, tipo: ${typeof numero1}
numero2 - valor: ${numero2}, tipo: ${typeof numero2}
numero3 - valor: ${numero3}, tipo: ${typeof numero3}
numero4 - valor: ${numero4}, tipo: ${typeof numero4}
numero5 - descripcion: ${numero5.description}, tipo: ${typeof numero5}
numero6 - descripcion: ${numero6.description}, tipo: ${typeof numero6}
numero7 - descripcion: ${numero7.description}, tipo: ${typeof numero7}
numero8 - descripcion: ${numero8.description}, tipo: ${typeof numero8}
`);

// Pruebas comparativas (mejor con ===)
console.log("Comparaciones:");
console.log("numero1 === numero2:", numero1 === numero2); // true (4 y 4.0)
console.log("numero1 === numero3:", numero1 === numero3); // false (number vs string)
console.log("numero1 === numero4:", numero1 === numero4); // false
console.log("numero1 === numero5:", numero1 === numero5); // false (Symbol nunca es igual a number)
console.log("numero5 === numero6:", numero5 === numero6); // false (Symbols siempre únicos)


// 7. NULL (Nulo)
/* El tipo de dato nulo es similar a UNDEFINED, con la variación de que hay un consentimiento del usuario
o del sistema a que esta variable intencionalmente fue iniciada con este valor */

var isPremiumUser;  // (antes: isPremiemUser)
var isNewUser;
let todayDate = new Date();
var lastLogin = todayDate;

console.warn("7.- NULL (Nulo)");

// OJO: usa el MISMO nombre que declaraste arriba en tu archivo.
// En tu código original la variable era: usuariologeado
console.log(`
    El usuario: ${usuariologeado}, tipo de dato: ${typeof(usuariologeado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiumUser}, tipo de dato: ${typeof(isPremiumUser)}
`);

// Validación del usuario
if (todayDate == lastLogin)
    isNewUser = true;
else
    isNewUser = false;

// Como es un usuario nuevo aún no se define si será premium.
// Intencionalmente se asigna NULL.
isPremiumUser = null;

console.log("Datos después de la validación de los datos del usuario:");
console.log(`
    El usuario: ${usuariologeado}, tipo de dato: ${typeof(usuariologeado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiumUser}, tipo de dato: ${typeof(isPremiumUser)}
`);
