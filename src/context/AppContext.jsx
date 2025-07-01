import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { onMessageListener } from "../firebase/messages";

import Cookies from "js-cookie";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [token, setToken] = useState(() => Cookies.get("token"));
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [notificationUpdate, setNotificationUpdate] = useState(false);
  const [show, setShow] = useState(false);

  const [userData, setUserData] = useState(() => {
    const cookieData = Cookies.get("user");
    return cookieData ? JSON.parse(cookieData) : null;
  });

  onMessageListener()
    .then((payload) => {
      console.log("🚀 ~ .then ~ payload:", payload);
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      setNotificationUpdate((prev) => !prev);
      setTimeout(() => {
        setShow(false);
        setNotification({ title: "", body: "" });
      }, 3000);
    })
    .catch((err) => console.log("failed: ", err));

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log("🚀 ~ useEffect ~ error:", error);
      }
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        loginAuth,
        logoutAuth,
        onBoardLogout,
        token,
        userData,
        setUserData,
        longitude,
        latitude,
        show,
        setShow,
        notification,
        setNotification,
        notificationUpdate,
        setNotificationUpdate,
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
