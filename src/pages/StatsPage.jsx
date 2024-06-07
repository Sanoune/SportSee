import { useParams } from "react-router-dom";
import Stats from "../component/Stats";
import { useDataContext } from "../context/mockDataContext";
import usePerformanceData from "../hook/usePerformanceData";

/**
 * Composant StatsPage qui affiche les statistiques de performance de l'utilisateur.
 * Il récupère et affiche les données de performance de l'utilisateur.
 *
 * @component
 * @returns {JSX.Element} Le composant StatsPage.
 */
function StatsPage() {
  const { useMockData } = useDataContext();
  const { id } = useParams();

  // Récupère les données de performance de l'utilisateur
  const {
    performanceData,
    loading: performanceLoading,
    error: performanceError,
  } = usePerformanceData(id, useMockData);

  // Affiche l'état de chargement
  if (performanceLoading) {
    return <div>Loading...</div>;
  }

  // Affiche l'état d'erreur
  if (performanceError) {
    return <div>Error loading data</div>;
  }

  // Affiche les données de performance
  return (
    <div className="w-6/12 h-auto flex items-center self-center">
      <Stats data={performanceData} />
    </div>
  );
}

export default StatsPage;
