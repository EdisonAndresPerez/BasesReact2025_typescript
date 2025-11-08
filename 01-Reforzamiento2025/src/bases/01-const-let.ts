
//-----------------------------------

const primerNombre = "Edison";
const segundoNombre = "Pérez";

const nombreCompleto = `${primerNombre} ${segundoNombre}`;
console.log(nombreCompleto);

const edad = 21;
console.log(edad)


//-----------------------------------
// 🧩 Tipos explícitos en TypeScript
// Sirven para definir de forma manual el tipo de dato que una variable puede almacenar.
// Se usa la sintaxis: nombreVariable: tipoDato = valor;
// Esto permite que el compilador verifique errores de tipo antes de ejecutar el código.
// Ejemplo: string, number, boolean, etc.
// 🔍 Ideal para tener un código más seguro, legible y fácil de mantener.
const comidaFavorita: string = "Hamburguesa de tierra querida";
const HamburguesaComidas: number = 3;

//-----------------------------------

//Buscarletra a un string
const buscarLetraE = segundoNombre.includes('e');
console.log({buscarLetraE, comidaFavorita, HamburguesaComidas});
