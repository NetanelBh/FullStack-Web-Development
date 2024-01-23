import { useState } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const sendRequest = async (url, fetchConfig) => {
    setIsLoading(true);
    setFetchedData([]);

    try {
      const resp = await fetch(url, {
        method: fetchConfig.method,
        body: JSON.stringify(fetchConfig.body),
        headers: fetchConfig.headers
      });
      
      if (!resp.ok) throw new Error("Request failed");
      
      const data = await resp.json();
      setFetchedData(data);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return { isLoading, fetchedData, sendRequest};
};
