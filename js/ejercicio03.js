// Estilización de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 03: Funciones", style_console);

// 1. Funciones preocedurales, vacias, VOID, sin valor de retorno y sin parametros de entrada

function saluda(){
    console.log("Bienvenido al Sistemas de Bienes Raices");
}

console.warn("1. Funciones sin valor de retorno, sin parametros de entrada");
saluda();

// 2. Funciones procedurales sin valor de retorno, pero que si recibe parametros es decir daros de entrada

function saluda_usuario(username, gender)
    {
        if(gender=="H")
        console.log(`Bienvenido, ${username} al Sistema de Bienes Raices`);
        
        else if(gender=="M")
        console.log(`Bienvenida, ${username} al Sistema de Bienes Raices`);

        else
        console.log(`Bienvenid@, ${username} al Sistema de Bienes Raices`);
    }
    console.warn ("2. funciones sin valor de retorno, con parametros de entrada");
    saluda_usuario("Oliver","H");
    console.log("-----");
    saluda_usuario("Ana","N");
    console.log("-----");
    saluda_usuario("Mua", null);

// 3. Funciones que retornan un dato, pero que no reciben parametros de entrada

function fechaActual()
{
    const fecha = new Date();
    const dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    
    return fecha_formatoMX;
};

console.log("2. Funciones que retornan un valor, pero no tienen parametros")
let hoy = fechaActual();
console.log(`Bienvenid@ al Sistema de Bienes Raices, hoy es ${hoy}`);

/*Imprimeindo que tipo de dato es:*/
console.log(fechaActual());
console.log(typeof fechaActual());

// 4. Funciones que retornan un valor y que reciiben parámetros de entrada

function login(username, password)
{
    let userValidation = false;
    if(username==="admin" && password==="12345"){
        userValidation = true;
        console.log("Bienvenido usuario admin!")
        }
    else if(username==="admin" && password!=="12345"){
        userValidation = false;
        console.log("Lo sentimos la contraseña es incorrecta.")
        }
    else if(username!="admin" && password==="12345"){
        userValidation = false;
        console.log("Lo sentimos el nombre de usuario no existe.")
        }
    else if (username!="admin" && password!=="12345"){
        userValidation = false;
        console.log("Por favor verifica el nombre de usuario y la contraseña")
        }
    return userValidation;
}

console.warn("4. Funciones que retornan un dato, pero también reciben parametros de entrada");
var loginStatus;
//Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario: admin, password: 12345")
loginStatus = login("admin", "12345");
console.log(`${loginStatus?`El usuario admin se ha logueado satisfactoriamente`:`Hubo un error en el login del usuario admin`}`);

//Test 2 - Usuario y contraseña correctos
console.log("Test 2 - usuario: administrador, password: 12345")
loginStatus = login("administrador", "12345");
console.log(`${loginStatus?`El usuario admin se ha logueado satisfactoriamente`:`Hubo un error en el login del usuario admin`}`);

//Test 3 - Usuario y contraseña correctos
console.log("Test 3 - usuario: admin, password: 1234567890")
loginStatus = login("admin", "1234567890");
console.log(`${loginStatus?`El usuario admin se ha logueado satisfactoriamente`:`Hubo un error en el login del usuario admin`}`);

//Test 4 - Usuario y contraseña correctos
console.log("Test 4 - usuario: marcor, password: mipassword")
loginStatus = login("marcor", "mipassword");
console.log(`${loginStatus?`El usuario admin se ha logueado satisfactoriamente`:`Hubo un error en el login del usuario admin`}`);

// FUNCIONES ANONIMAS, FUNCIONES FLECHA (ARROW), FUNCUINES LAMBA
/* A diferencia de las funciones nombradas este tipo de funciones no suelen ser reutilizadas eb el codgio
solo se ejecutan una sola vez, dando velocidad, individalidad y privacidad a los datos utilizado en el proceso*/

// 5. Función aninima sin parámetros
isNewUser = function(){
    const hoy = new fecha();

    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5. Funcines Anonimas, sin parámtros")

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario": "Usuario Antiguo."}`);

console.log("----------------------------------------------------");
lastLogin = new Date("2025/12/31");
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario": "Usuario Antiguo"}`);

//6. Funciones Anónimas con Parámetros (Versión Arrow o Lambada)

const sumar = (a,b) => {
    let resultado= a+b;
    return resultado;
}
console.warm("6. Funciones Anónimas con Parámetros")
console.log ('El resultado de la suma de 15 + 83 es: ${sumar(15,83)}');

/*Cuando la función anónima tiene solo una línea de operación se puede usar una versión simplificada que no usa
 {} llaves, ni la palabra reservada (return) */

 const multiplicar = (a,b) => a*b;
 console.log(`El resultado de la suma de 15 +125 es: ${multiplicar(25,125)}`);

//7. Funciones Callback (Regreso de llamado)

const recoverPassword = function(email, Callback)
{
    //Generamos el código a enviar al usuario.
    const recoveryCode= Math.floor(1000000 + Math.random()*900000)

    console.log(`
        ========================================
    Solicitud de recuperación recibida 
    Correo del usuario solicitante: ${email}
    Generando código de recuperación...
    Código de Seguridad Generado ${recoveryCode}
    Enviando el correo al usuario...
    Correo Enviado a: ${email}, con el código de seguridad: ${recoveryCode}
    =====================================`);


    //definiendo la respuesta del sistema 
    const response ={
        status: "OK",
        message: "Código de recuperación encíado satisfactoriamente."
    };

    Callback(respuesta);
    };

    //Invocación de una función callback
    recoverPassword("osanchez@gmail.com",
    function(systemResponse){
        console.log("Respuesta del sistema: ");
        console.log(systemResponse.message);
    });