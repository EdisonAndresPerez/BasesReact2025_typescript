import React, { useContext } from "react";
import { Link } from "react-router";
import { userContext } from "@/09-useContext/context/UserContext";

export const AboutPage = () => {
  const { isAuthenticatedUser, user } = useContext(userContext);

  console.log("no se puede recargar la pagina ");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Pagina Sobre mi</h1>
      <hr />

      <div className="flex flex-col gap-2 p-10">
        <Link to="profile" className="hover:text-blue-500 underline text-2xl">
          Perfil
        </Link>

        {isAuthenticatedUser && (
          <span className="text-2xl">Hola, {user.name}</span>
        )}

        {!isAuthenticatedUser && (
          <Link to="login" className="hover:text-blue-500 underline text-2xl">
            Iniciar sesion
          </Link>
        )}
      </div>
    </div>
  );
};
