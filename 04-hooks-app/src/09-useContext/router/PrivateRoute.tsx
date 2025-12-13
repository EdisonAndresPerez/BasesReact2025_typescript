import { use, type JSX } from "react";
import { userContext } from "../context/UserContext";
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element;
}

export const PrivateRoute = ({ element }: Props) => {
  const { isAuthenticated } = use(userContext);

  if (isAuthenticated === "checking") {
    return <div>Cargando....</div>;
  }
  if (isAuthenticated === "authenticated") {
    return element;
  }

  return <Navigate to="/login" replace />;
};

//hacer publicroutes
