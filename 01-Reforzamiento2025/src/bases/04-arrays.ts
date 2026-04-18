//------------------------------
//const arregloNumeros: (number|string)[] = [10, 20, 30, 40, 50];
const arregloNumeros: number[] = [10, 20, 30, 40, 50];

const arregloNumeros2 = [...arregloNumeros];

//metodo push modifica el arreglo original
arregloNumeros2.push(60);
console.log({ arregloNumeros, arregloNumeros2 });

//------------------------------

const numeros: number[] = [1, 2, 3, 4];
console.log(numeros);
const numeros2 = numeros;
numeros2.push(5);
console.log(numeros2);

const numerosV2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosV2copia = [...numerosV2];
numerosV2copia.push(11);
console.log({ numerosV2, numerosV2copia });

//------------------------------

type Producto = {
  nombre: string;
  precio: number;
  disponible: boolean;
};

const producto1: Producto = {
  nombre: "Laptop",
  precio: 1500,
  disponible: true,
};

const producto2: Producto = {
  nombre: "Iphone 15 pro max",
  precio: 2500,
  disponible: true,
};

const producto3: Producto = {
  nombre: "Monitor de 27 pulgadas",
  precio: 3000,
  disponible: false,
};

const productos: Producto[] = [producto1, producto2, producto3];
for (const producto of productos) {
  if (producto.disponible) {
    console.log(
      `El producto ${producto.nombre} esta disponible por un precio de ${producto.precio}`,
    );
  } else {
    console.log(`El producto ${producto.nombre} NO ESTA DISPONIBLE`);
  }
}

//------------------------------

type Usuario = {
    nombre: string;
    edad: number;
    correo: string;
    activo: boolean;
    direccion: {
        ciudad: string;
        pais: string;
    }   
}

const usuario1: Usuario = {
    nombre: 'Edison',
    edad: 22,
    correo: 'edison@example.com',
    activo: true,
    direccion: {
        ciudad: 'Bogotá',
        pais: 'Colombia'
    }
}

const usuario2: Usuario = {
    nombre: 'Felipe',
    edad: 18,
    correo: 'felipe@example.com',
    activo: true,
    direccion: {
        ciudad: 'Medellín',
        pais: 'Colombia'
    }
}

console.log(`El usuario ${usuario1.nombre} vive en ${usuario1.direccion.ciudad} 
    y el usuario ${usuario2.nombre} vive en ${usuario2.direccion.ciudad}`);


//------------------------------

const numerosLista = [10, 20, 30, 40, 50];

const numerosXdos = numerosLista.map((numeros) => numeros * 2)
console.log(numerosXdos)

const numerosMayoresaCincuenta = numerosXdos.filter((numerosXdos) => numerosXdos > 50)
console.log(numerosMayoresaCincuenta)



//------------------------------


type Estudiante = {
  nombre: string;
  notas: number[];
};


const estudiante1: Estudiante = {
    nombre: 'Edison',
    notas: [4.5, 3.8, 4.0, 5.0]
}

const estudiante2: Estudiante = {
    nombre: 'Ana',
    notas: [4.0, 2.8, 3.0, 1.0]
}

const estudiante3: Estudiante = {
    nombre: 'Carlos',
    notas: [3.5, 4.2, 3.8, 4.5]
}


const calcularPromedioEstudiantes: Estudiante[] = [estudiante1, estudiante2, estudiante3]

for (const estudiante of calcularPromedioEstudiantes){
    const promedio = estudiante.notas.reduce(( acumulador, nota) => nota + acumulador, 0) / estudiante.notas.length;
    console.log("------------PROMEDIO-----------------")
    console.log(`Estudiante ${estudiante.nombre} tiene un promedio de: ${promedio.toFixed(1)}`)

    if (promedio >= 4.0) {
      console.log("--------APROBADO------")
        console.log(`El estudiante ${estudiante.nombre} esta aprobado`);
    }
    else {
      console.log("--------REPROBADO------")
        console.log(`El estudiante ${estudiante.nombre} esta reprobado`);
    }
} 