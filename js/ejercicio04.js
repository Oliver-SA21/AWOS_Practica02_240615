//Estilizción de la barra zona de purebas en el DevTools en el navegador
console.log("%cEjercicio 04: Objetos ", style_console);

console.warn("1. Propiedades de un Objeto")

let propertyID = 1;
let propertaryName = "Departamento en el cnetro de la Ciudad de México";
let propetaryDescription = "Hermoso departamento de 3 recámaras, 1 baño y 1 cajón de estacionamiento en el Centro de Ciudad de México, ubicado en un tercer piso."
let propertaryType = "D";   //H: House D: Departament T: Terrain L: Locale W: Warehouse C: Cabain
let propertaryIsSaleable = false;   //Se vende?
let propertaryIsRentable = true;    //Se renta?
let propertaryPrice = 7500.00; 
let propertaryLat = 19.4283813;
let propertaryLong = -99.1020177;
let propertaryIncludedServices = ["Agua", "Luz", "Gas"];
let propertaryImage = null;
let propertaryOwnerID = 32412 
let propertaryStatus = "Good"

console.log(`Datos de la propiedad en renta:
    nombre: ${propertaryName}
    descripcion: ${propetaryDescription}
    tipo: ${propertaryType}
    precio: ${propertaryPrice}
    ubicacion: Latitud: ${propertaryLat}  longitud: ${propertaryLong}
    Servicios Incluidos: ${propertyIncludedServices}
    en renta: ${propertyRentable}
    en venta: ${propertyIsSaleable}
    token: ${propertyToken.description}
    dueño: ${propertyOwnerID}
    imagen: ${propertyImage}`);


//2. Declaración de un objeto
/* Para declarar un objeto en JS es necesario asignarle un nombre y todas sus propiedades 
irán entre {} y separadas por coma en el color clave: valor*/

console.warn("2. Declaracion de el objeto property1")
    property1 = {
        id: 1,
        name: "Departamento en el centro de la ciudad de mexico",
        description: "Hermoso departamento de 3 recamamras, 1 baño yun cajon de estacionamineto ubicado en el centro de Ciudad de Mexico, Ubicado en un tercer piso.",
        type: "D",
        price:75000.00,
        isRentable: true,
        isSaleable: false,
        IncludedServices: ["Agua", "Luz", "Gas"],
        lat: 19.4283813,
        long: -99.1020177,
        status: Symbol("D-12558-CDMX-MX-S"),
        token: Symbol("D-12558-CDMX-MX-S"),
        ownerID: 32412
    }

//Impresión del objeto en formato tabla
console.table(property1)

// 3. Leyendo las propiedades de un objeto
/* Un objeto es un conjunto de variables que abstraen una entidad fisica o conceptusl de la que es significativa almacenar
informacion para que el programa o sistema que estemos desarrollando

Para acceder alas propiedades individuales basta con poner el nombre de objeto un "." y el nombre de la propiedad*/

console.warn("3. Lectura de Propiedades de un objeto");

console.log(`El usuario con id: ${property1.ownerID} esta rentando un ${property1.name} el cual se describe cómo: ${property1.description} 
    por un precio de: ${property1.price} con los servicios incluidos de: ${property1.IncludedServices} ${isSaleable?
        " actualmente esta a la venta": "  Que a momento no esta a la venta"}.`) ;

//4. Modificacion dddde los valores de las propiedades de un objeto
/* Para modificar los datos de una variable basta con acceder a la propiedad deseada a modificar y asignarle su nuevo a travez del signo = */

property1.price = 8200.00
property1.isSaleable= true;
property1.IncludedServices= ["Agua", "Luz", "Gas", "Internet", "Seguridad Privada"];

console.warn("4. Modificacion de propiedades de un objeto");

console.log(`El usuario con id: ${property1.ownerID} esta rentando un ${property1.name} el cual se describe cómo: ${property1.description} 
    por un precio de: ${property1.price} con los servicios incluidos de: ${property1.IncludedServices} ${isSaleable?
        " actualmente esta a la venta": "  Que a momento no esta a la venta"}.`) ;


//Destructuracion de Objetos (Objet Destructuring)
/*Java Script es un lenguaje dinamico quhe permite que un objeto previamente definido pueda ser descompuesto en pequeñas nuevas partes (variavles)
pra que estas puedad puedad ser manipuladas segun sea la necesidad */

user1 = 
{
        userID: 240615,
        name: "Oliver Sanchez Arrioka",
        email: "osanchezarrioja@gmail.com",
        createdAt: Date("2015/01/30T23:15:52"),
        createdAt: Date("2015/01/30T23:15:52"),
        userRole:("Vendedor"),
        totalProperties: 12,
        rating: 9.4
}

user2 = 
{
        userID: 123456,
        name: "Johan Sanchez Arrioja",
        email: "jsanchezarrioja@gmail.com",
        createdAt: Date("2024/10/02T16:20:25"),
        createdAt: Date("2026/11/10T20:18:32"),
        userRole:("Comprador"),
        rating: 8.5,
        lastOperation : "Buscando Departamento en Renta"
}

user3 = 
{
        userID: 523562,
        name: "Anita Victoria Lorenzo Antonio",
        email: "ana@gmail.com",
        createdAt: Date("2023/11/22T16:20:55"),
        createdAt: Date("2026/12/15T20:13:32"),
        userRole:("Comprador"),
        rating: 8.5,
        lastOperation : "Buscando Departamento en Renta"
}

user4 = 
{
        userID: 632424,
        name: "Muaaa",
        email: "muaaa@gmail.com",
        createdAt: Date("2020/10/21T16:41:25"),
        createdAt: Date("2023/06/10T21:19:32"),
        userRole:("Comprador"),
        rating: 8.5,
        lastOperation : "Buscando Departamento en Renta"
}

console.warn("5. Destructuración de Objetos");

bid1 = (seller, buyer, property) => {

    const {userID: sellerID, email: sellerEmail} = seller;
    const {userID: buyerID, email: buyerEmail} = buyer;
    const {price, id} = property;
    fecha_oferta = new Date();
    price
    
    console.log (`El usuarui: ${buyerID} esta realizando una oferta al usuario: ${sellerID} por la cantidad de $${price} 
        por la propiedad con id: ${id} en la fecha: ${date}`)

    return {
        sellerID,
        buyerID,
        propertyID: id,
        offeredPrice: price,
        date_bidedd : fecha_oferta,
        bid_acurrate: Math.round((price_dbidedd / price), 2) * 100 + "%"
    }
}

//Test 1: El usuario 2 realiza una oferta de 7500
let bid1 = buyerBid(user1, user2, property1, 7500);
console.log(`La oferta tiene una exactitud del: ${bid1.bid_accurrate}`)

//Test 2: El usuario 3 realiza una oferta de 8200
let bid2 = buyerBid(user1, user3, property1, 8200);
console.log(`La oferta tiene una exactitud del: ${bid2.bid_accurrate}`)

//Test 3: El usuario 4 realiza una oferta de 10000
let bid3 = buyerBid(user1, user4, property1, 10000);
console.log(`La oferta tiene una exactitud del: ${bid3.bid_accurrate}`)