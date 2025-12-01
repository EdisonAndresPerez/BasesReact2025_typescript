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


el useEffect tiene algo llamado la lista de dependencias, dice que cada cuanto queremos disparar el efecto


  useEffect(() => {
  
  },[]



  USEREF
Hook de react que permite guardar valores que no deben provocar re-render 
conserva el valor anterior    

en el ejemplo de este curso creamos un input con un boton. al momento de darle al boton se guarda algo ( lo que haya escrito ) react no borra eso que escribiste cada vez que el componente se vuelve a renderizar. 

para que sirve?
si quieres que un input se enfoque automaticamente cuando cargas la pagina 
import { useRef, useEffect } from "react";

function MiFormulario() {
  const inputRef = useRef(null); // creamos la "cajita"

  useEffect(() => {
    inputRef.current.focus(); // accedemos al input y lo enfocamos
  }, []);

  return <input ref={inputRef} placeholder="Escribe tu nombre" />;
  useRef crea una “referencia” al input, y con .current accedemos al elemento real del DOM.
}


A veces necesitas guardar algo entre renders, pero no quieres que React vuelva a pintar el componente (como sí pasaría con useState).

=> referencias importantes => inputRef.current?.value
                              inputRef.current?.select();
                              inputRef.current?.focus();




CONECTAR MULTIPLES CUSTOMHOOKS ENTRE SI 



------------------------------------------------------------------------------------


En esta sección trabajaremos con el hook "useReducer”, el cual está diseñado para ayudarnos a resolver estados donde una acción puede desencadenar varios cambios de estado simultáneamente, pero también se puede usar para cosas simples también, pero su poder radica en que puedes colocar nombres humanamente legibles para las acciones que cambian el estado.



Puntualmente veremos:

Patron reducer
useReducer hook
Validadores de esquemas - Zod
Efectos sobre estados
LocalStorage y SessionStorage
Condiciones de los reducers



PATRON REDUCER
Un reducer es una función pura que siempre debe devolver un nuevo estado.
Su propósito es resolver un nuevo estado basándose en los argumentos que recibe.

Los argumentos son:
state: el estado actual.
action: un objeto que describe qué tipo de cambio queremos realizar.

La acción (action) determina cómo debe cambiar el estado y qué datos se necesitan para hacerlo.
Generalmente tiene dos propiedades:

type: el tipo de acción (por ejemplo, "ADD_TODO" o "DELETE_TODO").
payload: el valor o argumento adicional que usa la acción para actualizar el estado.

Flujo del reducer:
Se define un estado inicial.
Ocurre una acción (por ejemplo, el usuario agrega una tarea).
El reducer evalúa el tipo de acción.
Devuelve un nuevo estado actualizado.
React actualiza el componente con ese nuevo estado.

Ejemplo mental:

El reducer es como un juez:
recibe el estado actual (los hechos),
la acción (el argumento del abogado),
y devuelve un nuevo veredicto (el nuevo estado). ⚖️

primer patron llamado => patron anoptico

usamos el switch para revisar el tipo de accion ( action.type) y ejecuta el bloque correspondiente. 

dependiendo de que pidieronn( en este caso anadir, eliminar y marcarTarea ) hare algo distinto con el estado actual de cada uno 

cada case genera un nuevo estado inmutable => inmutable es un estado que no puede cambiar el valor


case "ADD_TODO": {
  const newTodo: Todo = {
    id: Date.now(),
    text: action.payload,
    completed: false,
  };
  return {
    ...state,
    todos: [...state.todos, newTodo],
  };
}

Crea un nuevo objeto newTodo con:

id único (basado en la fecha actual).

text que viene desde action.payload (lo que el usuario escribió).

completed en false (porque está sin terminar).

Retorna un nuevo estado donde:

Se copia todo lo que había (...state).

Se agrega el nuevo todo al final del arreglo todos.



CONSEJO::Con gusto te ayudaré. Sí, te entiendo totalmente, al principio el useReducer suena más complicado de lo que debería, pero una forma fácil de saber si vale la pena usarlo es cuando ya tienes muchos estados que se empiezan a cruzar, ahí es donde useReducer vale la pena, ya que te hace la vida más sencilla porque concentras todo en un solo reducer y ya así no andas con tantos useState dispersos, igualmente mientras más practiques y vayas avanzando en el curso le vas a agarrar más sentido.





DONDE MANEJAR EL LOCALSTORAGE
 En el componente que usa el reducer (con useEffect)

Ahí sincronizas el estado con el storage como todo un caballero del código:

Conceptualmente:

Cuando cargue la app → lees del storage

Cada vez que cambien los todos → guardas en storage


✅ Métodos principales del objeto Storage

Estos son los que sí o sí debes conocer:

🔹 Guardar datos
localStorage.setItem('clave', 'valor');

🔹 Obtener datos
localStorage.getItem('clave');

🔹 Eliminar un dato específico
localStorage.removeItem('clave');

🔹 Limpiar TODO el storage
localStorage.clear();

🔹 Obtener clave por índice
localStorage.key(index);

🔹 Cantidad de elementos almacenados
localStorage.length;


Diferencia entre los tipos de Storage

🟢 localStorage

Persistente

No se elimina al cerrar el navegador

Ideal para: tareas, sesión básica, configuración

🔵 sessionStorage

Se borra al cerrar la pestaña

Solo vive en esa sesión

Si son pocos datos → localStorage

Si es sesión temporal → sessionStorage

Si es arquitectura seria → IndexedDB



para poder mejorar nuestros datos guardados en un localStorage, Y que no manipulen esos datos gente con algo de conocimiento. podemos usar un VALIADOR O ESQUEMA 

en este caso vamos a usar zod https://zod.dev/


------------------------
ESTABLECER ACCIONES EN MI REDUCER

en este caso la primera accion sera el poder ingresar mi palabra. ese sera la primera accion que pondremos en nuestro reducer type ScrambleWordsAction.

lo declaramos en el reducer : 

export type ScrambleWordsAction =
  | { type: 'SET_GUESS', payload: string }
  | { type: "NO_TENGO_IDEA_2" }
  | { type: "NO_TENGO_IDEA_3" };

export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordsAction
) => {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase()
      };

    default:
      return state;
  }
};


se utiliza : 

             <Input
                    id="guess"
                    type="text"
                    value={guess}
                    onChange={(e) =>{
                      dispatch({
                        type: 'SET_GUESS',
                        payload: e.target.value,
                      })
                    }}
                    placeholder="Ingresa tu palabra..."
                    className="text-center text-lg font-semibold h-12 border-2 border-indigo-200 focus:border-indigo-500 transition-colors"
                    maxLength={scrambledWord.length}
                    disabled={isGameOver}
                  />









