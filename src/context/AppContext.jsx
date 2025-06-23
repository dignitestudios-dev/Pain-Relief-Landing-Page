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

  const loginAuth = (data) => {
    console.log(data, "data===Context");
    if (data) {
      if (data?.data?.token) {
        Cookies.set("token", data?.data?.token);
        setToken(data?.data?.token);
      }
      if (data?.data?.user) {
        setUserData(data?.data?.user);
        Cookies.set("user", JSON.stringify(data?.data?.user));
      }
    }
  };

  const logoutAuth = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    localStorage.clear();
    sessionStorage.clear();
    setToken(null);
    setUserData(null);
    navigate("/auth/sign-in");
  };

  const onBoardLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    localStorage.clear();
    sessionStorage.clear();
    setToken(null);
    setUserData(null);
  };

  return (
    <AppContext.Provider
      value={{
        loginAuth,
        logoutAuth,
        onBoardLogout,
        token,
        userData,
        setUserData,
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
