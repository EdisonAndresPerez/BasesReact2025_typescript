import React from 'react'

export const AboutPage = () => {
  console.log('no se puede recargar la pagina ')
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Pagina Sobre mi</h1>
      <hr />

      <div className='flex flex-col gap-2'>
        <a href="profile">Perfil</a>
        <a href="login">Iniciar sesion</a>
      </div>

    </div>
  )
}
