import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from '@env'

const apiURL = API_BASE_URL || "http://localhost:5000";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true); // Add this state

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch) {
        setIsLoading(true);
        setError(null);

        try {
          const response = await axios.get(`${apiURL}/api/${endpoint}`);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [endpoint, shouldFetch]); // Include shouldFetch in the dependency array

  // Add a refetch function to manually trigger fetching
  const refetch = () => {
    setShouldFetch(true);
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
