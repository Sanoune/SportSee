import { useParams } from "react-router-dom";
import SessionDuration from "../component/SessionDuration";
import { useDataContext } from "../context/mockDataContext";
import useSessionsData from "../hook/useSessionsData";

/**
 * Composant SessionDurationPage qui affiche la durée des sessions de l'utilisateur.
 * Il récupère et affiche les données de session de l'utilisateur.
 *
 * @component
 * @returns {JSX.Element} Le composant SessionDurationPage.
 */
function SessionDurationPage() {
  const { useMockData } = useDataContext();
  const { id } = useParams();

  // Récupère les données de session de l'utilisateur
  const {
    sessionsData,
    loading: sessionsLoading,
    error: sessionsError,
  } = useSessionsData(id, useMockData);

  // Affiche l'état de chargement
  if (sessionsLoading) {
    return <div>Loading...</div>;
  }

  // Affiche l'état d'erreur
  if (sessionsError) {
    return <div>Error loading data</div>;
  }

  // Affiche les données de session
  return (
    <div className="w-96 h-auto flex items-center self-center">
      <SessionDuration data={sessionsData} />
    </div>
  );
}

export default SessionDurationPage;
