import { useState } from "react";
import api from "../API/Axios";

// Custom hook for making GET requests
function useAPI(initialData = []) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const get = async (query) => {
    try {
      const response = await api.get(query);
      setData(response?.data?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  // Function to handle login requests
  const login = async (userData) => {
    try {
      const response = await api.post("/user/login");
      setData(response?.data?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle signup requests
  const signup = async (userData) => {
    try {
      const response = await api.post("/user/signup");
      setData(response?.data?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, get, login, signup };
}
export default useAPI;
