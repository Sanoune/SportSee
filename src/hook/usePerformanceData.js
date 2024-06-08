import { useEffect, useState } from "react";
import { getPerformanceData } from "../services/apiService";
import { getMockPerformanceData } from "../services/mockService";

const usePerformData = (id, useMockData) => {
  const [performanceData, setPerformData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = useMockData
          ? getMockPerformanceData()
          : await getPerformanceData(id);
        setPerformData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, useMockData]);

  return { performanceData, loading, error };
};

export default usePerformData;
