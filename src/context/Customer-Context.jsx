import { createContext, useEffect, useState } from "react";
import {
  createCustomerApi,
  getCustomersApi,
  getCustomerByIdApi,
} from "../api/customerApi";

export const customerContext = createContext();

export function CustomerContext({ children }) {
  const [message, setMessage] = useState("");

  const createCustomer = async (payload) => {
    try {
      const data = await createCustomerApi(payload);
      console.log(data);
      setMessage(data.data.message);
      return data;
    } catch (error) {
      setMessage(error.response.data.message);
      console.log("create error => ", error);
    }
  };

  const getCustomers = async () => {
    try {
      const data = await getCustomersApi();
      return data;
    } catch (error) {
      console.log("get customers => ", error);
    }
  };

  const getCustomerById = async (id) => {
    try {
      const data = await getCustomerByIdApi(id);
      return data;
    } catch (error) {
      console.log("get customer => ", error);
    }
  };

  useEffect(() => {
    if (message.length > 0) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <customerContext.Provider
      value={{
        createCustomer,
        getCustomers,
        getCustomerById,
        message,
      }}
    >
      {children}
    </customerContext.Provider>
  );
}
