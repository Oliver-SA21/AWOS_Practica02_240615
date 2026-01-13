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
var fullnameOwner = "Oliver Sánchez"
let nameProperty = "Hermosa casa en la playa de Puerto Vallarta"
let dercriptionProperty = "Hermosa casa de 3 recamaras, 2 baños, cocina equipada, alberca y vista al mar."
var statusProperty = "Disponible"
const typeProperty = "C"
var addressProperty;

/* Los tipos de datos String son palabras, valores cualitativos de las entidades de nuestra
aplicación, que no tiene un tamaño maximo y que estan conformadas por caracteres alfabeticos,
caracteres especiales como acentos o símbolos de algun idioma*/

console.warn("4.- STRING (Cadenas de texto)");
console.log(`El usuario: ${fullnameOwner} está vendiendo o rentando: ${nameProperty}.
Que consiste en: ${descriptionProperty}.
Actualmente la propiedad se encuentra: ${statusProperty}, del tipo: ${typeProperty}.`);

//Manipulando Strings, los tipos de datos cualitaativos tienen ciertos metodos para manipulas su valor
// por mencionar alggunos:

// Transformar a mayusculas
console.log(`Nombre de la propiedad: ${fullnameOwner.toUpperCase()}`);
// Transformar a minusculas
console.log(`Descripcion de la propiedad: ${descriptionProperty.toLowerCase()}`);
// Numero de caracteres
console.log(`Numero de letras en el tipo de propiedad: ${typeProperty.length}`);
// Subcadenas
console.log(`Nombre del propietario: ${fullnameOwner.slice(14, fullnameOwner.length)}`);
// Eliminar espacios en blanco
console.log(`Nombre de la propiedad: ${nameProperty.trim()}`);
// Reemplazar caracteres
console.log(`Descripcion modificada: ${descriptionProperty.replace("3 recamaras", "4 recamaras")}`);
// Reemplazar todos los caracteres
console.log(`Descripcion modificada: ${descriptionProperty.toLocaleUpperCase().replaceAll("casa", "propiedad")}`);

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

//6. SYMBOL 

/*Es un tipo de dato que ademas de tenr un tipo, un valor, asocia la ubicación del espacio en memoria, por lo que todos los valores
asignados a una variable de este tipo siempre serán UNICOS */

console.warn("6. SYMBOL (Simbolos)");

const numero1 = 4;
const numero2 = 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = symbol(4.0);
const numero7 = symbol("4");
const numero8 = symbol("4.0");

//valores y tipo de datos
console.log(`Valores y tipos:
    numero1 - valor: ${numero1}, tipo: ${typeof(numero1)}
    numero2 - valor: ${numero2}, tipo: ${typeof(numero2)}
    numero3 - valor: ${numero3}, tipo: ${typeof(numero3)}
    numero4 - valor: ${numero4}, tipo: ${typeof(numero4)}
    numero5 - valor: ${numero5.description}, tipo: ${typeof(numero5)}
    numero6 - valor: ${numero6.description}, tipo: ${typeof(numero6)}
    numero7 - valor: ${numero7.description}, tipo: ${typeof(numero7)}
    numero8 - valor: ${numero8.description}, tipo: ${typeof(numero8)}
    `);

// Pruebas comparativas
 if(numero1 ==numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else

    console.log("Las variables numero1 y numero2 no son iguales en valor.")
if(numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")

if(numero1 == numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")

if(numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")

if(numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")

if(numero1 ==numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero2 no son iguales en valor.")

if(numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")

if(numero1 == numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")

if(numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")

if(numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")

//7. NULL (Nulo)
/* El tipode dato nulo es similar a UNDFINED, con la variación de que hay un consentimiento del usuario
o del sistema a que esta variable intencionalmente fue iniciada con este valor*/

var isPremiemUser;
var isNewUser;
let todayDate = new Date();
var lastLogin = todayDate;

console.warn("7. NULL (Nulo)");
console.log(`
    El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiemUser}, tipo de dato: ${typeof(isPremiemUser)}`);

// Validación del usuario

if(todayDate == lastLogin)
    isNewUser = true;
else
    isNewUser = false;

// Cómo es un usuario nuevo aun no ve, ni publica ninguna propiedad por defecto no interesa por el
// momento que sea premium hasta que interactue con la plataforma.
isPremiemUser = null;
console.log("Datos despues de la validaación de los datos del usuario: ")
console.log(`
    El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiemUser}, tipo de dato: ${typeof(isPremiemUser)}`);