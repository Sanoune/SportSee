import { useEffect, useState } from "react";
import { getUserDataById } from "../services/apiService";
import { getMockUserById } from "../services/mockService";

const useUserData = (id, useMockData) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = useMockData
          ? getMockUserById()
          : await getUserDataById(id);
        setUserData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, useMockData]);

  return { userData, loading, error };
};

export default useUserData;
