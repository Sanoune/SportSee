import { useEffect, useState } from "react";
import { getActivityData } from "../services/apiService";
import { getMockActivityData } from "../services/mockService";

/**
 * Hook personnalisé pour récupérer les données d'activité en fonction de l'ID fourni.
 * Il peut récupérer des données réelles ou des données factices en fonction du drapeau `useMockData`.
 *
 * @param {string} id - L'ID de l'activité pour laquelle récupérer les données.
 * @param {boolean} useMockData - Drapeau pour déterminer si des données factices doivent être utilisées.
 * @returns {Object} Un objet contenant les données de l'activité, l'état de chargement et l'état d'erreur.
 */
const useActivityData = (id, useMockData) => {
  // État pour stocker les données de l'activité récupérées
  const [activityData, setActivityData] = useState([]);

  // État pour indiquer si les données sont en cours de chargement
  const [loading, setLoading] = useState(true);

  // État pour stocker toute erreur survenue lors de la récupération des données
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Fonction pour récupérer les données d'activité.
     * Elle récupère soit des données réelles, soit des données factices en fonction du drapeau `useMockData`.
     */
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = useMockData
          ? getMockActivityData()
          : await getActivityData(id);
        setActivityData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, useMockData]);

  return { activityData, loading, error };
};

export default useActivityData;
