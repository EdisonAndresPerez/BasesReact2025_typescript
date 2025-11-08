import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import  './bases/01-const-let.ts'
//import  './bases/02-template-string.ts'
//import  './bases/03-object-literal.ts'
//import  './bases/04-arrays'
//import  './bases/05-functions'
//import './bases/06-obj-desestructuring'
//import './bases/07-array-destructuring'
//import './bases/08-imp-exp'
//import './bases/09-promesas'
//import './bases/10-fetch-api'
import './bases/11-async-await'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hola Mundo</h1>
    <p>Bienvenido a los apuntes del  curso React 2025. <br /> creado por <strong>Fernando Herrera</strong> || <strong>DevTalles</strong> </p>
    <span>Edison Andres Perez Martinez</span>
  </StrictMode>,


)


