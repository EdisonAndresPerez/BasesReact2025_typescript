
En esta sección comenzaremos a trabajar de una forma estructurada React, que nos permita escalar proyectos y empezar a trabajar el pensamiento  que necesitamos la separación en componentes pequeños fáciles de reutilizar y probar.

Puntualmente veremos:

Peticiones HTTP
Debounce
Manejo de estado
Comunicación entre componentes
useEffect
Variables de entorno



PETICIONES HTTP

HTTP define un copjunto de metodos de peticiones para indicar la accion que se desea realizar para un recurso determinado. Aunque estos tambien pueden ser sustantivos, estos metodos de solicitud a veces son llamados HTTP verbs. Cada uno de ellos implementan una semántica diferente

POST
El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

GET
El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

PUT
El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

DELETE
El método DELETE borra un recurso en específico.

HEAD
El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.


CONNECT
El método CONNECT establece un túnel hacia el servidor identificado por el recurso.

OPTIONS
El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

TRACE
El método TRACE realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

PATCH
El método PATCH es utilizado para aplicar modificaciones parciales a un recurso.

En este caso usamos la peticion GET en postman con esta url => https://api.giphy.com/v1/gifs/search?api_key=fP1J5TqlIBEBkBCpZ2L91Sl3DrYZABVP&q=gato&limit=10&lang=es

me devuelve la api_key, q, limit, lang,



DEBOUNCE
¿Qué es debounce?

Debounce es un patrón que permite controlar la frecuencia con la que una función se ejecuta.
La lógica es: solo se ejecuta la función cuando el usuario deja de realizar una acción por un tiempo determinado.

Ejemplo fácil de visualizar:

El usuario escribe en un input. Cada letra genera un evento.
Con debounce, esperas a que deje de escribir antes de llamar a una API.

Es como decir:
“Tranqui bro, termina lo que estás haciendo y luego ejecuto la función”.


MANEJO DE ESTADO 
El estado es toda la información que cambia con el tiempo en tu aplicación y que afecta lo que el usuario ve en pantalla.
Ejemplos típicos de estado:

El valor que escribes en un input

Un contador que sube o baja

Los GIFs que llegan de la API

Si un modal está abierto o cerrado

El usuario autenticado

¿Qué es el manejo de estado?

Es el conjunto de técnicas y herramientas para:

 Guardar la información que cambia
 Actualizar esa información correctamente
 Hacer que la interfaz se vuelva a renderizar cuando sea necesario
 Mantener sincronizados los componentes y la UI

 En pocas palabras:

Manejo de estado = Controlar la información dinámica que define la interfaz de tu app.


¿Qué es la comunicación entre componentes?
React se basa en componentes que se reutilizan y se componen entre sí. Estos componentes necesitan compartir información.

Comunicación entre componentes significa cómo un componente envía o recibe datos de otro.

Tipos de comunicación en React

React tiene un modelo unidireccional.
Los datos fluyen de arriba hacia abajo (parent ➜ child).

A partir de esto salen 3 escenarios principales:

1. Comunicación Padre ➜ Hijo

Se envían datos y funciones mediante props.

Uso:
<ComponenteHijo valor={count} onClick={incrementar} />

El hijo recibe props:
export const ComponenteHijo = ({ valor, onClick }) => {
  return <button onClick={onClick}>{valor}</button>;
};


2. Comunicación Hijo ➜ Padre

El hijo no puede modificar el estado del padre directamente.
Debe invocar una función que el padre le pasa como prop.

Ejemplo sencillo:
El padre controla el estado, el hijo solo notifica.

// Padre
const handleUserInput = (value) => setQuery(value);
<Buscador onInputChange={handleUserInput} />

En el hijo : 
onChange={(e) => onInputChange(e.target.value)}


USEEFFECT
useEffect es un Hook de React que permite ejecutar efectos secundarios en componentes funcionales.
Un efecto secundario es cualquier acción que sucede fuera del flujo normal del render.

Traducción a lenguaje millennial tecnológico: React controla la UI, pero hay momentos donde debes hacer cosas “por fuera”. Para eso existe useEffect.

¿Qué cosas son efectos secundarios?

Ejemplos muy comunes:

Llamadas HTTP (fetch, axios, etc.)

Subscribirse a eventos (scroll, teclado, WS)

Guardar datos en localStorage

Manipular APIs del navegador (Timers: setTimeout, setInterval)

Conexiones a servicios externos

React debe manejarlas con cuidado porque no pueden ejecutarse durante el render, ya que podrían bloquear la interfaz o causar renders infinitos.

useEffect(() => {
  // Efecto
  return () => {
    // Limpieza opcional
  }
}, [dependencias]);


VARIABLES DE ENTORNO
se crea un archivo llamado .env fuera del src 
Son valores externos al código que tu aplicación necesita, pero que no deberían estar directamente escritos en tu proyecto.

Ejemplos típicos:

API Keys (como la de Giphy)

URLs del backend (DEV, TEST, PROD)

Tokens, secretos, configuraciones sensibles

Se llaman “de entorno” porque cambian según el entorno donde se ejecuta tu app:

Las variables de entorno permiten almacenar datos sensibles o dependientes del entorno fuera del código fuente. En Vite se definen en archivos .env, se usan con el prefijo VITE_ y se accede mediante import.meta.env.



----------------------------------------------------


Esta es una sección grande sobre pruebas automáticas, donde cubriremos fuertemente la aplicación de Gifs que hicimos en la sección anterior.

Puntualmente aprenderemos sobre:

Pruebas sobre hooks
Pruebas sobre custom hooks
Pruebas con tareas asíncronas
Pruebas con tareas que involucran timeouts
Pruebas sobre axios
Integrar testing en el proceso de construcción
Espías
Sobre escribir funciones para el testing
Manejo de excepciones
