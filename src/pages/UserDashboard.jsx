import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import iconCalorie from "../assets/calories-icon.svg";
import iconCarbs from "../assets/carbs-icon.svg";
import iconFat from "../assets/fat-icon.svg";
import iconProtein from "../assets/protein-icon.svg";
import Activity from "../component/Activity";
import NutritionInfo from "../component/NutritionInfo";
import Score from "../component/Score";
import SessionDuration from "../component/SessionDuration";
import Stats from "../component/Stats";
import Welcome from "../component/Welcome";
import { useDataContext } from "../context/mockDataContext";
import useActivityData from "../hook/useActivityData";
import usePerformanceData from "../hook/usePerformanceData";
import useSessionsData from "../hook/useSessionsData";
import useUserData from "../hook/useUserData";

/**
 * Composant UserDashboard qui affiche le tableau de bord de l'utilisateur.
 * Il récupère et affiche les données de l'utilisateur, les données d'activité, les données de session et les données de performance.
 *
 * @component
 * @returns {JSX.Element} Le composant UserDashboard.
 */
function UserDashboard() {
  const { useMockData, toggleDataMode } = useDataContext();
  const { id } = useParams();

  // Récupère les données de l'utilisateur
  const {
    userData,
    loading: userLoading,
    error: userError,
  } = useUserData(id, useMockData);

  // Récupère les données d'activité
  const {
    activityData,
    loading: activityLoading,
    error: activityError,
  } = useActivityData(id, useMockData);

  // Récupère les données de session
  const {
    sessionsData,
    loading: sessionsLoading,
    error: sessionsError,
  } = useSessionsData(id, useMockData);

  // Récupère les données de performance
  const {
    performanceData,
    loading: performanceLoading,
    error: performanceError,
  } = usePerformanceData(id, useMockData);

  // Affiche l'état de chargement
  if (userLoading || activityLoading || sessionsLoading || performanceLoading) {
    return <div>Loading...</div>;
  }

  // Affiche l'état d'erreur

  return (
    <div className=" px-16 xl:px-24 py-16 flex-1">
      <div>
        <div>{userData && <Welcome name={userData.firstname || ""} />}</div>
      </div>
      <button onClick={toggleDataMode}>{useMockData}</button>
      <div className="flex gap-6 xl:gap-10 mt-14 ">
        <div className="flex flex-col flex-1 gap-6 xl:gap-10 max-w-[835px]">
          <div>
            {/*transforme string en bool car composant prend bool*/}
            <Activity error={!!activityError} data={activityData} />
          </div>
          <div className="flex gap-6 xl:gap-10">
            <div className="flex-1">
              <SessionDuration error={!!sessionsError} data={sessionsData} />
            </div>
            <div className="flex-1">
              <Stats error={!!performanceError} data={performanceData} />
            </div>
            <div className="flex-1">
              <Score error={!!userError} data={userData.score} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <NutritionInfo
            error={!!userError}
            imageSrc={iconCalorie}
            backgroundClass={"bg-red-200 rounded-md"}
            value={userData.calories}
            label="Calories"
            unit="kCal"
          />
          <NutritionInfo
            error={!!userError}
            backgroundClass={"bg-cyan-100 rounded-md"}
            imageSrc={iconProtein}
            value={userData.proteines}
            label="Protéines"
            unit="g"
          />
          <NutritionInfo
            error={!!userError}
            backgroundClass={"bg-yellow-100 rounded-md"}
            imageSrc={iconCarbs}
            value={userData.glucides}
            label="Glucides"
            unit="g"
          />
          <NutritionInfo
            error={!!userError}
            backgroundClass={"bg-purple-100 rounded-md"}
            imageSrc={iconFat}
            value={userData.lipides}
            label="Lipides"
            unit="g"
          />
        </div>
      </div>
    </div>
  );
}

UserDashboard.propTypes = {
  children: PropTypes.node,
};

export default UserDashboard;
