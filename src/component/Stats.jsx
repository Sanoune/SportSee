import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

// Traductions pour les noms des catégories
const translations = {
  cardio: "Cardio",
  force: "Force",
  endurance: "Endurance",
  vitesse: "Vitesse",
  energie: "Énergie",
  intensite: "Intensité",
};

/**
 * Composant pour afficher un graphique radar des statistiques.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.data - Les données à afficher dans le graphique radar.
 * @param {boolean} props.error - Indique s'il y a eu une erreur lors du chargement des données.
 * @returns {JSX.Element} Le composant Stats.
 */
export default function Stats({ data, error }) {
  // Transformation des données pour les adapter au format attendu par Recharts
  const intensityData = Object.keys(data).map((key) => ({
    nom: translations[key],
    value: data[key],
  }));

  return (
    // Conteneur responsive pour ajuster la taille du graphique en fonction de son conteneur parent
    <ResponsiveContainer
      width="100%"
      height="100%"
      aspect={1}
      className="rounded-md bg-sportsee-bgGraphique"
    >
      {error && (
        // Affichage d'un message d'erreur si une erreur est survenue
        <span className="text-white my-auto">Une erreur est survenue</span>
      )}
      {!error && (
        // Graphique radar principal
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          width="100%"
          height="100%"
          data={intensityData}
        >
          {/* Grille polaire pour les axes radiaux du graphique */}
          <PolarGrid />
          {/* Axe pour les angles du graphique radar */}
          <PolarAngleAxis
            dataKey="nom"
            tick={{ fontSize: 10, fill: "#FFFFFF" }}
          />
          {/* Graphique radar avec les données */}
          <Radar
            name="Intensity"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      )}
    </ResponsiveContainer>
  );
}

// Définition des types de props attendues par le composant
Stats.propTypes = {
  // Les données doivent être un objet avec des clés correspondant aux catégories et des valeurs numériques
  data: PropTypes.shape({
    intensite: PropTypes.number.isRequired,
    cardio: PropTypes.number.isRequired,
    force: PropTypes.number.isRequired,
    vitesse: PropTypes.number.isRequired,
    energie: PropTypes.number.isRequired,
    endurance: PropTypes.number.isRequired,
  }).isRequired,
  // Indique si une erreur est survenue lors du chargement des données
  error: PropTypes.bool,
};
