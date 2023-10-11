import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@env'

const apiURL = API_BASE_URL || "http://localhost:5000";

const usePost = (endpoint, data) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const postData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log(data)
        const response = await axios.post(`${apiURL}/api/${endpoint}`, data);
        console.log(response.data);
        setResponse(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    postData();
  }, [endpoint]);

  return { isLoading, error, response };
};

export default usePost;
