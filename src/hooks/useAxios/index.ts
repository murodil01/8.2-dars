import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const useAxios = () => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export default useAxios;
