import React from 'react'
import { Link } from 'react-router'

export const AboutPage = () => {
  console.log('no se puede recargar la pagina ')
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Pagina Sobre mi</h1>
      <hr />

      <div className='flex flex-col gap-2'>
        <Link to="profile">Perfil</Link>
        <Link to="login">Iniciar sesion</Link>
      </div>

    </div>
  )
}
