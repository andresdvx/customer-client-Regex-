import axios from "./axiosConfig";

export const signUpAdminApi = async (payload) => {
  const res = await axios.post("admins/signup", payload);
  return res;
};

export const signInAdminApi = async (payload) => {
  const res = await axios.post("admins/signin", payload);
  return res;
};

export const verifyAuth = async () => {
  const res = await axios.post("admins/verify-auth");
  return res;
};
