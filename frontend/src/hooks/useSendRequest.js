import { useState, useCallback } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

const BASE_URL = 'http://localhost:8000/api';

const useSendRequest = () => {
    const token = Cookies.get("token");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

   const authHeaders = token ? { Authorization: `Token ${token}` } : {};

  const sendRequest = useCallback(async (endpoint, method, data = null) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers: authHeaders,
        data,
      };

      const result = await axios(config);
      setResponse(result.data);
    } catch (err) {
      setError(err.response ? err.response.data : 'Network error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { sendRequest, response, error, loading };
};

export default useSendRequest;
