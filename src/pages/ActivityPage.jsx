import { useParams } from "react-router-dom";
import iconCalorie from "../assets/calories-icon.svg";
import iconCarbs from "../assets/carbs-icon.svg";
import iconFat from "../assets/fat-icon.svg";
import iconProtein from "../assets/protein-icon.svg";
import Activity from "../component/Activity";
import NutritionInfo from "../component/NutritionInfo";
import { useDataContext } from "../context/mockDataContext";
import useActivityData from "../hook/useActivityData";
import useUserData from "../hook/useUserData";

/**
 * Composant ActivityPage qui affiche l'activité et les informations nutritionnelles de l'utilisateur.
 * Il récupère et affiche les données d'activité et les données utilisateur.
 *
 * @component
 * @returns {JSX.Element} Le composant ActivityPage.
 */
function ActivityPage() {
  const { useMockData } = useDataContext();
  const { id } = useParams();

  // Récupère les données d'activité de l'utilisateur
  const {
    activityData,
    loading: activityLoading,
    error: activityError,
  } = useActivityData(id, useMockData);

  // Récupère les données utilisateur
  const {
    userData,
    loading: userLoading,
    error: userError,
  } = useUserData(id, useMockData);

  // Affiche l'état de chargement
  if (activityLoading || userLoading) {
    return <div>Loading...</div>;
  }

  // Affiche l'état d'erreur
  if (activityError || userError) {
    return <div>Error loading data</div>;
  }

  // Affiche les données d'activité et les informations nutritionnelles
  return (
    <div className="flex p-8 gap-6 self-center w-full h-full">
      <div className="flex-1 w-auto h-auto self-center">
        <Activity data={activityData} />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <NutritionInfo
          imageSrc={iconCalorie}
          backgroundClass={"bg-red-200 rounded-md"}
          value={userData.calories}
          label="Calories"
          unit="kCal"
        />
        <NutritionInfo
          backgroundClass={"bg-cyan-100 rounded-md"}
          imageSrc={iconProtein}
          value={userData.proteines}
          label="Protéines"
          unit="g"
        />
        <NutritionInfo
          backgroundClass={"bg-yellow-100 rounded-md"}
          imageSrc={iconCarbs}
          value={userData.glucides}
          label="Glucides"
          unit="g"
        />
        <NutritionInfo
          backgroundClass={"bg-purple-100 rounded-md"}
          imageSrc={iconFat}
          value={userData.lipides}
          label="Lipides"
          unit="g"
        />
      </div>
    </div>
  );
}

export default ActivityPage;
