import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from '@env'

const apiURL = API_BASE_URL || "http://localhost:5000";

const useFetch = (endpoint, params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${apiURL}/api/${endpoint}`, {
          params: params,
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;