export default function MyAwesomeApp() {
  const primerNombre = "Edison";
  const segundoNombre = "Andres";
  const primerApellido = "Perez";
  const SegundoApellido = "Martinez";

  const juegosFavoritos = ["Zelda", "Mario", "Metroid", "Halo"];
  const estadoUsuario = false;

  interface Usuario {
    nombre: string;
    edad: number;
    estadoDeLaEmpresa: boolean;
    herramientas: string[];
  }

  const usuario: Usuario = {
    nombre: "fernando",
    edad: 21,
    estadoDeLaEmpresa: true,
    herramientas: ["React", "Next"],
  };

  return (
    <div>
      <h1 data-testid="first-name-title">{primerNombre}</h1>
      <h3>{segundoNombre}</h3>
      <h3>{primerApellido}</h3>
      <h3>{SegundoApellido}</h3>

      <hr />
      <p className="mi-clase-favorita">{juegosFavoritos.join(",")}</p>

      <h2>{estadoUsuario ? "activo" : "no activo"}</h2>

      <hr />

      <p>prueba andres</p>
      {/*Ternario*/}
      <p
        style={{
          backgroundColor: "blue",
          borderRadius: "10px",
          whiteSpace: "pre",
          padding: "10px",
          color: "white",
        }}
      >
        {JSON.stringify(usuario, null, 2)}
      </p>
      <p>
        {usuario.estadoDeLaEmpresa
          ? "sigue en la empresa"
          : "no sigue en la empresa"}
      </p>
    </div>
  );
}
