//-----------------------------
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
{
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
}

interface PropsVideojuego {
  titulo: string;
  desarrollador: string;
  plataformas: string[];
  lanzamiento: lanzamiento;
}

interface lanzamiento {
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
