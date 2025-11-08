Esta sección tiene por objetivo reforzar el conocimiento de los hooks tradicionales y especializarlos en los "custom hooks"

Puntualmente veremos:

useState
useEffect
useRef
Custom Hooks como:
useCounter
usePokemon
useTrafficLight
Conectar múltiples custom hooks entre sí
Y mucho más...



-------------------------------------

USESTATE
Hook de react que permite agregar y gestionar estado interno dentro de un componente funcional. En este caso lo usamos para manejar el estado ( el color ) del semaforo. 

Cada vez que el estado cambia, React vuelve a renderizar el componente para reflejar la nueva informacion en la interfaz. En este caso relejar el cambio de color 

Es ideal para manejare valores dinamicos como 
Contadores
Formularios
Menus Activos
Flags de visibildidad
Colores, posiciones, datos cargados, etc.



USEEFFECT
Hook de react que permite hacer cambios secundarios 
en este caso se puede decir que el useEffect se usa para hacer cambios secundarios al semaforo. si esta en amarillo va ir lentooooo, si esta en verde aceleraaaa y si esta en rojo stop por unos segundos.

  useEffect(() => {
  if (countdown === 0) {
    if (light === "red") {
      setLight("yellow");
      setCountdown(2);
    } else if (light === "yellow") {
      setLight("green");
      setCountdown(10); 
    } else if (light === "green") {
      setLight("red");
      setCountdown(10); 
    }
  }
    

    console.log({ countdown });
    const intervalId = setInterval(() => {
      console.log(
        "setInterval llamado - propiedad de javascript - ejecuta una tarea repetidamente cada cierto tiempo"
      );
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log("CLeanup effect");
      clearInterval(intervalId);
    };
  }, [countdown, light]);


  a pesar de que asi funciona correctamente. se recomienda que los efectos sean atomicos y solo hagan una tarea no muchas tareas. 

  los efectos una tarea especifica 
