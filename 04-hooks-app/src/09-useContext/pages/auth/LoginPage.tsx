import { userContext } from "@/09-useContext/context/UserContext";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export const LoginPage = () => {

  const {login} = useContext(userContext)



  const [userId, setUserId] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const autenticateResult = login(+userId)
    console.log({autenticateResult})




    //detener el comportamiento automatico que tendria un evento en el navegador
    //en este caso evita que el formulario recargue la pagina
    event.preventDefault();
    console.log({userId});
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar sesion</h1>

      <hr />

      <form className="flex flex-col gap-2 my-10" onSubmit={handleSubmit}>
        <Input
          type="number"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
          placeholder="ID del usuario"
        ></Input>

        <Button type="submit">Ingresar</Button>
      </form>
      <Link to="/about">
        <Button variant="ghost">Volver al inicio</Button>
      </Link>
    </div>
  );
};
