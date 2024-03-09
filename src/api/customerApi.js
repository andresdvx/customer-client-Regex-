import axios from "./axiosConfig";

export const getCustomersApi = async () => {
  const res = await axios.get("customers/");
  return res;
};

export const getCustomerByIdApi = async (id) => {
  const res = await axios.get(`customers/${id}`);
  return res;
};

export const createCustomerApi = async (payload) => {
  const res = await axios.post("customers/create", payload);
  return res;
};
