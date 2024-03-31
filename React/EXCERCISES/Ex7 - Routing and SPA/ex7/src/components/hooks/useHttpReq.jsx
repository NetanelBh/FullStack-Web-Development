import { useState } from "react";

import axios from 'axios';

const useHttpReq = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const fetchFnc = async (url) => {
    setIsLoading(true);

    try {
      const resp = await axios.get(url);
      const usersList = resp.data;
      setFetchedData(usersList);
    } catch (error) {
      throw new Error(error.message);
    }

    setIsLoading(false);
  }; 

  return {isLoading, fetchedData, fetchFnc};
};

export default useHttpReq;