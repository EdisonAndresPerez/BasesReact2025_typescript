//-----------------------------------

const primerNombre = "Edison";
const segundoNombre = "Pérez";

const nombreCompleto = `${primerNombre} ${segundoNombre}`;
console.log(nombreCompleto);

const edad = 21;
console.log(edad);

//-----------------------------------
// 🧩 Tipos explícitos en TypeScript

// Sirven para definir de forma manual el tipo de dato que una variable puede almacenar.

// Se usa la sintaxis: nombreVariable: tipoDato = valor;
// Ejemplo de tipo de dato: string, number, boolean, etc.

// Esto permite que el compilador verifique errores de tipo antes de ejecutar el código.
// 🔍 Ideal para tener un código más seguro, legible y fácil de mantener.

// Ejemplo de tipos explícitos en TypeScript
const comidaFavorita: string = "Hamburguesa de tierra querida";
const HamburguesaComidas: number = 3;

// Ejemplo de error de tipo
// const errorTipo: number = "Esto es un string"; // Esto generará un error de tipo porque se está asignando un string a una variable que espera un número.
// const errorTipo = 'Edison perez';

//-----------------------------------

//Buscarletra a un string
const buscarLetraE = segundoNombre.includes("e");
console.log({ buscarLetraE, comidaFavorita, HamburguesaComidas });

//------------------------------------

const nombre = "Edison";
const apellido = "Perez";
const miEdad: number = 22;
const esDesarrollador: boolean = true;
const fechaNacimiento = new Date("2003-11-20");
const libroFavorito = "Los chicos malos tienen buenas historias";
const peliculaFavorita: string = "Never Back Down";
const ciudadFavorita = "Medellín";

const informacionPersonal = `holaaa soy ${nombre} ${apellido}, tengo ${miEdad} años, soy desarrollador: ${esDesarrollador}, nací el ${fechaNacimiento.toDateString()}, mi libro favorito es "${libroFavorito}", mi película favorita es '${peliculaFavorita}' y mi ciudad favorita es ${ciudadFavorita}.`;

console.log(informacionPersonal)
console.log({miEdad, esDesarrollador, peliculaFavorita})

//------------------------------------

const nombreCompleto2 = 'Edison Andres Perez Martinez';
const buscarLetraA = nombreCompleto.includes('a');
const buscarPrimerNombre = nombre.includes('Edison');

console.log({ buscarLetraA, buscarPrimerNombre });



//-----------------------------------

const producto = "Laptop";
const precio = 2500000;
const cantidad = 2;

console.log(`persona numero 2 compraste: ${producto} a un precio de ${precio} por unidad. Total a pagar: ${precio * cantidad}`)


// const a: number = "veinte"; => esta variable esta mal asginada por que la constante a espera un numero typado. pero la respuesta es un string.
// const b: string = 100; => mal asignada por que la constante b espera un string pero se le asigna un numero.
// const c: boolean = false; => esta variable esta bien asignada por que se le asigna un valor booleano (typado) y la respuesta es un booleano.
// const d: string = `Hola mundo`; => esta variable esta bien asignada por que se le asigna un valor string (typado) y la respuesta es un string.


//-----------------------------------

//Perfil jugador
const nombreJugador: string = 'DarkOzuFull';
const nivelJugador: number = 200;
const puntuacionJugador: number = 1500;
const personaJugador: string = 'Invocador';
const jugadorActivo: boolean = true;

const perfilJugador = `El jugador ${nombreJugador} es un ${personaJugador} de nivel ${nivelJugador} con una puntuación de ${puntuacionJugador}. ¿Está activo? ${jugadorActivo}`;
console.log(perfilJugador);

const buscarLetraO = nombreJugador.includes('O');
console.log({ buscarLetraO });