import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { Link } from "react-router";
import { userContext } from "@/09-useContext/context/UserContext";
export const ProfilePage = () => {
  const { user } = useContext(userContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />

      <pre className="my-4 w-[80%] overflow-x-auto">
        {JSON.stringify(user, null, 2)}
      </pre>

      <div className=" flex gap-2">
        <Link to="">
          <Button variant="destructive">Salir</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost">Volver al Inicio</Button>
        </Link>
      </div>
    </div>
  );
};
