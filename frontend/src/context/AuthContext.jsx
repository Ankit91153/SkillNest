import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const navigate = useNavigate();
  const storedDataString = localStorage.getItem("userData");
  const storedDataObject = storedDataString ? JSON.parse(storedDataString) : null;
  
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(storedDataObject);
  const [services, setServices] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const storeToken = (serverToken) => {
    setIsLoggedIn(true);
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const userAuthentication = async () => {
    // setUser([]);
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.msg);
        localStorage.setItem("userData", JSON.stringify(data.msg));
       
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

 

  const getServiceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/service/allService", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.data);
      } else {
        console.error("Error fetching service data");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const LogoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    getServiceData();
    userAuthentication();
  }, [token]);

  const value = {
    storeToken,
    isLoggedIn,
    LogoutUser,
    user,
    services,
    userAuthentication,
    token,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
