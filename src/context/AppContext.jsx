import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

import Cookies from "js-cookie";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => Cookies.get("token"));
  const [userData, setUserData] = useState(() => {
    const cookieData = Cookies.get("user");
    return cookieData ? JSON.parse(cookieData) : null;
  });
  const [role, setRole] = useState(() => Cookies.get("role"));

  const loginAuth = (data) => {
    if (data) {
      if (data?.data?.token) {
        Cookies.set("token", data?.data?.token);
        setToken(data?.data?.token);
      }
      if (data?.data?.user) {
        setUserData(data?.data?.user);
        Cookies.set("user", JSON.stringify(data?.data?.user));
      }
      if (data?.data?.user?.role) {
        Cookies.set("role", data?.data?.user?.role);
        setRole(data?.data?.user?.role);
      }
    }
  };

  const logoutAuth = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("role");
    setToken(null);
    setUserData(null);
    setRole(null);
    navigate("/auth/sign-in");
  };

  return (
    <AppContext.Provider
      value={{
        loginAuth,
        logoutAuth,
        token,
        userData,
        setUserData,
        role,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
