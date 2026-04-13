const miNombre = 'Andres';
const miApellido = "Perez"

const fullNombre = `El nombre es:
 ${miNombre} ${miApellido}
`
console.log(fullNombre)


//-----------------------------
const videoJuegoFavorito = "stardew valley";
const consola = "Nintendo Switch";
const ciudad = "ibague";

const mensaje = "hola me llamo andres, \nmi videojuego favorito es " + videoJuegoFavorito + ". \njuego en la consola " + consola + " y vivo en la ciudad de " + ciudad;
console.log(mensaje);


//-----------------------------

const animal = "perro";
const sonido = "guau";
const mensajeAnimal = `El ${animal} hace ${sonido}`;
console.log(mensajeAnimal)


//-----------------------------

const videoJuegoFavorito2 = "Minecraft";
const edadComienzo = 10;
const ciudadComprado = "Ibague";

const mensaje2 = ` videoJuego: ${videoJuegoFavorito2}
 edad de compora: ${edadComienzo}
 ciudad de compra: ${ciudadComprado}
`
console.log(mensaje2)


//-----------------------------

const precioBase = 80000;
const iva = 0.19;
const precioFinal = `El precio final del producto es: ${precioBase + (precioBase * iva)}`;
console.log(precioFinal)

//-----------------------------

const esPremium = false;
const usuario = "Andres";

const mensajeUsuario = `El usuario ${usuario} es ${esPremium ? "premium" : "no premium"}`;
//dentro del template con un ternario ? :
console.log(mensajeUsuario)





const producto = "Laptop";
const cantidad = 2;
const precioUnitario = 100000;
const ciudadCompra = "Ibague";

const mensajeCompra = `El cliente compro ${cantidad} unidades de ${producto}. a un precio unitario de ${precioUnitario}
En la ciudad de ${ciudadCompra}. El precio total es: ${cantidad * precioUnitario} 
El subtotal es: ${cantidad * precioUnitario}`
console.log(mensajeCompra)