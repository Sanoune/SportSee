import { useEffect, useState } from "react";
import { averageSessionsData } from "../services/apiService";
import { getMockSessionsData } from "../services/mockService";

const useSessionsData = (id, useMockData) => {
  const [sessionsData, setSessionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = useMockData
          ? getMockSessionsData()
          : await averageSessionsData(id);
        setSessionsData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, useMockData]);

  return { sessionsData, loading, error };
};

export default useSessionsData;
