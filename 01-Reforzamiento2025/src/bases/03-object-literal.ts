//-----------------------------

// ¿Qué es un objeto literal?
// Un objeto literal es simplemente una forma directa de crear un objeto usando {}
const persona = {
  nombre: "tomy",
  apellido: "perez",
  edad: 25,
  profesion: "desarrollador",
  casado: false,
  direccion: {
    calle: "falsa",
    numero: 123,
  },
};

persona.nombre = "andres";
persona.edad = 21;

//-----------------------------
//operador spread ...
//coge todas las propiedades de el objeto persona y las copias en un nuevo objeto persona2
const persona2 = { ...persona };

persona2.nombre = "juan";
persona2.apellido = "Martinez";

//console.log(persona, persona2);

//-----------------------------

const spiderman = {
  nombre: "Peter Parker",
  edad: 30,
  poderes: ["trepar", "sentido arácnido", "fuerza sobrehumana"],
};

const iroman = { ...spiderman };

iroman.nombre = "Tony Stark";
iroman.edad = 40;
iroman.poderes = ["inteligencia", "dinero", "armadura avanzada"];

console.log(iroman, spiderman);

//-----------------------------
//Interfaces
/*
interface PropsVideojuego {
  titulo: string;
  desarrollador: string;
  plataformas: string[];
  lanzamiento: {
    anio: number;
    mes: string;
    dia: number;
  };
}
*/

interface PropsVideojuego {
  titulo: string;
  desarrollador: string;
  plataformas: string[];
  lanzamiento: Lanzamiento;
}

interface Lanzamiento {
  anio: number;
  mes: string;
  dia: number;
}

const videojuego1: PropsVideojuego = {
  titulo: "The Legend of Zelda: Breath of the Wild",
  desarrollador: "Nintendo",
  plataformas: ["Nintendo Switch", "Wii U"],
  lanzamiento: {
    anio: 2017,
    mes: "marzo",
    dia: 3,
  },
};

const videojuego2: PropsVideojuego = {
  titulo: "Minecraft",
  desarrollador: "Mojang Studios",
  plataformas: ["PC", "Consolas", "Móviles"],
  lanzamiento: {
    anio: 2011,
    mes: "noviembre",
    dia: 18,
  },
};

console.log(videojuego1, videojuego2);

//-----------------------------

const mascota = {
  nombre: "tomy",
  especie: "perro",
  edad: 3,
  estaVacunado: true,
  duenio: {
    nombre: "juan",
    ciudad: "bogota",
  },
};

mascota.nombre = "rocky";
mascota.duenio.nombre = "medellin";

console.log(mascota);


//-----------------------------

const heroes = {
  nombre: "Bruce Wayne",
  edad: 35,
  ciudad: "Gotham"
}

const heroes2 = {...heroes}

heroes2.nombre = "Clark Kent"; 
heroes2.edad = 32
heroes2.ciudad = "Metropolis"

console.log(heroes, heroes2);



//-----------------------------



interface PropsCarro {
  marca: string;
  modelo: string;
  anio : number
  esElectrico: boolean;
  color: string
}

const carro1: PropsCarro = {
  marca: "Tesla",
  modelo: "Model S",
  anio: 2020,
  esElectrico: true,
  color: "rojo"
}

const carro2: PropsCarro = {
  marca: "Ford",
  modelo: "Mustang",
  anio: 1969,
  esElectrico: false,
  color: "azul"
}

console.log(carro1, carro2);



//-----------------------------



interface PropsUniversidad {
nombre : string,
ciudad : string,
pais : string,
}


interface PropsEstudiante {
  nombre: string,
  edad: number,
  promedio: number,
  estaActivo: boolean,
  universidad : PropsUniversidad
}


const estudiante1: PropsEstudiante = {
  nombre: "Andres",
  edad: 21,
  promedio: 4.5,
  estaActivo: true,
  universidad: {
    nombre: "Universidad Nacional",
    ciudad: "Bogota",
    pais: "Colombia"
  }
}
