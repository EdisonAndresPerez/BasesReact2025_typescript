import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-mock.data";
import { LogOut } from "lucide-react";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

//nuestras props del context
interface UserContextProps {
  //estado inicial
  isAuthenticated: AuthStatus;
  user: User | null;

  //metodos
  //Iniciar sesion
  login: (userId: number) => boolean;
  //Cerrar sesion
  logout: () => void;
}

export const userContext = createContext({} as UserContextProps);

//HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log({ userId });

    return true;
  };

  const handleLogout = () => {
    console.log("cerrar");
  };

  return (
    <userContext.Provider
      value={{
        isAuthenticated: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
