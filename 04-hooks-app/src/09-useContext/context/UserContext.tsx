import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";

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
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`usuario no existe con ese id ${userId}`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }
    setUser(user);
    setAuthStatus("authenticated");
    //persistencia en el localStorage
    localStorage.setItem('userId', userId.toString())
    return true;
  };

  const handleLogout = () => {
    console.log("cerrar");
    setAuthStatus("not-authenticated");
    setUser(null)
  };


  useEffect(() => {
    const storageUserId = localStorage.getItem('userId')
    if(storageUserId ){
      handleLogin(+storageUserId);
    }
  },[])


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
