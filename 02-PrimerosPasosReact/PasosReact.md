En esta sección, se abordarán los fundamentos de React y conceptos esenciales como:

#1 Componentes
#2 Estructura y nomenclatura
#3 Props
#4 Hook - useState


///----------------///

COMPONENTES EN REACT
Las aplicaciones de React están hechas a partir de componentes. Un componente es una pieza de UI (siglas en inglés de interfaz de usuario) que tiene su propia lógica y apariencia. Un componente puede ser tan pequeño como un botón, o tan grande como toda una página.

Los componentes de React son funciones de JavaScript que devuelven markup (marcado):

function MyButton() {
return (
<button>Soy un botón</button>
);
}

Ahora que has declarado MyButton, puedes anidarlo en otro componente:

export default function MyApp() {
return (
<div>
<h1>Bienvenido a mi aplicación</h1>
<MyButton />
</div>
);
}

Nota que <MyButton /> empieza con mayúscula. Así es como sabes que es un componente de React. Los nombres de los componentes de React siempre deben comenzar con mayúscula, mientras las etiquetas HTML deben estar minúsculas.

Mostrar datos

JSX te permite poner marcado dentro de JavaScript. Las llaves te permiten “escapar de nuevo” hacia JavaScript de forma tal que puedas incrustar una variable de tu código y mostrársela al usuario. Por ejemplo, esto mostrará user.name:

return (

  <h1>
    {user.name}
  </h1>
);

---

const user = {
name: 'Hedy Lamarr',
imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
imageSize: 90,
};

export default function Profile() {
return (
<>
<h1>{user.name}</h1>
<img
className="avatar"
src={user.imageUrl}
alt={'Foto de ' + user.name}
style={{
          width: user.imageSize,
          height: user.imageSize
        }}
/>
</>
);
}

En el ejemplo de arriba, style={{}} no es una sintaxis especial, sino un objeto regular {} dentro de las llaves de JSX de style={ }. Puedes utilizar el atributo style cuando tus estilos dependen de variables de JavaScript.

Renderizado condicional

En React, no hay una sintaxis especial para escribir condicionales. En cambio, usarás las mismas técnicas que usas al escribir código regular de JavaScript. Por ejemplo, puedes usar una sentencia if para incluir JSX condicionalmente:

let content;
if (isLoggedIn) {
content = <AdminPanel />;
} else {
content = <LoginForm />;
}
return (

  <div>
    {content}
  </div>
);

Si prefieres un código más compacto, puedes utilizar el operador ? condicional. A diferencia de if, funciona dentro de JSX:

<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>





ESTRUCTURA Y NOMENCLATURA
src/
├── components/
│ ├── Saludo/
│ │ ├── Saludo.tsx
│ │ └── Saludo.module.css
├── App.tsx
└── main.tsx

Buenas prácticas:

Los componentes deben ir dentro de una carpeta /components.

Cada componente en su propio archivo con el mismo nombre (e.g. Saludo.tsx).

Los nombres de componentes siempre comienzan con mayúscula.

Los archivos de estilos específicos pueden ir en la misma carpeta del componente.

nombre-proyecto/
│
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── App.css
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

src/
Es la carpeta más importante. Contiene todo el código fuente de tu aplicación.

App.tsx → Es el componente principal. Representa la raíz de la aplicación, donde se montan todos los demás componentes.

main.tsx → Es el punto de entrada. Aquí React renderiza la app dentro del DOM (usualmente en index.html dentro del div con id root).

components/ → Aquí guardas todos los componentes reutilizables de tu app (botones, cards, formularios, etc.).

assets/ → Carpeta donde colocas tus imágenes, íconos, fuentes o estilos.

App.css / index.css → Archivos globales de estilos.

public/
Contiene archivos estáticos que no pasan por el proceso de compilación de Vite.
Por ejemplo: favicon, imágenes globales o el robots.txt.

Archivos de configuración
Archivo clave. Le dice a Vite cómo debe comportarse:
Define que el proyecto usa React.
Puedes configurar plugins, rutas, alias (@ → src), puertos del servidor, etc.

tsconfig.json
Archivo central de TypeScript.
Define las reglas del compilador: paths, strict mode, módulos, etc.

tsconfig.node.json
Configura específicamente el entorno de Node.js que Vite usa internamente.
Sirve para manejar los tipos y compatibilidad al momento de construir el proyecto.

package.json
Contiene toda la información del proyecto:
Nombre, versión, autor
Dependencias (react, vite, typescript, etc.)
Scripts (npm run dev, npm run build, npm run lint, etc.)

.eslintrc.cjs
Archivo para ESLint, el analizador de código.
Ayuda a mantener buenas prácticas y detectar errores comunes en el código.

.gitignore
Le indica a Git qué archivos o carpetas no subir al repositorio (por ejemplo: node_modules/, dist/ o .env).

index.html
Es el único archivo HTML del proyecto.
Contiene el <div id="root"></div> donde React renderiza toda tu app.






PROPS REACT
Son valores o funciones que se envian al componente, deben de ser inmutables y permiten la personalizacion.

interface Props {
firstName: string;
};
const Greeting = ({ firstName }: Props) => {
return <h1>Hola, {firstName}!</h1>;
};
// Usando el componente
<Greeting firstName="Edison" />






HOOKS - USESTATE

Las funciones que comienzan con use se llaman Hooks. useState es un Hook nativo dentro de React. Puedes encontrar otros Hooks nativos en la referencia de la API de React. También puedes escribir tus propios Hooks mediante la combinación de otros existentes.

Los Hooks son más restrictivos que las funciones regulares. Solo puedes llamar a los Hooks en el primer nivel de tus componentes (u otros Hooks). Si quisieras utilizar useState en una condicional o en un bucle, extrae un nuevo componente y ponlo ahí.

