import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { signUpAdminApi, signInAdminApi, verifyAuth } from "../api/adminApi";
export const adminContext = createContext();

export function AdminContext({ children }) {
  const [admin, setAdmin] = useState({});
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUp = async (payload) => {
    try {
      const data = await signUpAdminApi(payload);
      setAdmin(data.data.admin);
      setIsAuthenticated(true);
      setMessage(data.data.message);
      return data;
    } catch (error) {
      setMessage(error.response.data.message);
      console.log(error, " => sign up");
    }
  };

  const signIn = async (payload) => {
    try {
      const data = await signInAdminApi(payload);
      setIsAuthenticated(true);
      setAdmin(data.data.admin);
      return data;
    } catch (error) {
      console.log(error, " ===> sign in");
    }
  };

  useEffect(() => {
    const validateAuth = async () => {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        setAdmin(null);
        setIsAuthenticated(false);
        return;
      }
      try {
        const res = await verifyAuth();
        if (!res) {
          setAdmin(null);
          setIsAuthenticated(false);
          return;
        }
        setAdmin(res.data.admin);
        setIsAuthenticated(true);
      } catch (error) {
        setAdmin(null);
        setIsAuthenticated(false);
        console.log(error);
      }
    };
    validateAuth();
  }, []);

  useEffect(() => {
    if (message.length > 0) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <adminContext.Provider value={{ signUp, signIn, message, admin, isAuthenticated }}>
      {children}
    </adminContext.Provider>
  );
}
