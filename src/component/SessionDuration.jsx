import PropTypes from "prop-types";
import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

/**
 * Composant de tooltip personnalisé pour afficher la durée de la session.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.payload - Les données de payload pour afficher le tooltip.
 * @returns {JSX.Element} Le composant CustomTooltip.
 */
const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded">{`${payload[0].value} mins`}</div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
};

/**
 * Composant de curseur personnalisé pour indiquer la position du point.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.points - Les points pour afficher le curseur.
 * @returns {JSX.Element} Le composant CustomCursor.
 */
const CustomCursor = ({ points }) => {
  const { x } = points[0];
  const left = x;

  return (
    <Rectangle
      x={left}
      y={0}
      width={500}
      height={500}
      stroke="transparent"
      fill="black"
      fillOpacity="0.18"
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
};

/**
 * Composant de graphique de durée de session.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.data - Les données du graphique.
 * @param {boolean} props.error - Indique s'il y a eu une erreur lors de la récupération des données.
 * @returns {JSX.Element} Le composant SessionDuration.
 */
const SessionDuration = ({ data, error }) => {
  // Copie des données du graphique pour éviter les mutations
  const graphData = [...data];
  // Ajout de données fictives pour améliorer l'apparence du graphique
  if (graphData.length > 0) {
    graphData.unshift({
      day: "",
      duration: data[data.length - 1].duration,
    });
    graphData.push({ day: "", duration: data[0].duration });
  }

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      aspect={1}
      className="bg-red-500 rounded-md"
    >
      <LineChart
        width={500}
        height={300}
        data={graphData}
        margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
      >
        {/* Définition du dégradé pour la ligne du graphique */}
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
        {/* Texte d'indication au-dessus du graphique */}
        <text x={10} y={10} fontSize={15}>
          <tspan
            x={20}
            dy="1.2em"
            style={{
              fill: "rgba(255, 255, 255, 0.5)",
              fontWeight: "lighter",
              fontSize: "12",
            }}
          >
            Durée moyenne des
          </tspan>
          <tspan
            x={20}
            dy="1.2em"
            style={{
              fill: "rgba(255, 255, 255, 0.5)",
              fontWeight: "lighter",
              fontSize: "12",
            }}
          >
            sessions
          </tspan>
        </text>
        {/* Gestion de l'affichage en cas d'erreur */}
        {error && (
          <text x={30} y={70} fontSize={15}>
            Une erreur est survenue
          </text>
        )}
        {/* Affichage des axes, tooltip et ligne de graphique */}
        {!error && (
          <>
            <XAxis
              dataKey="day"
              tick={{ fill: "rgba(255, 255, 255, 0.5)" }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <Tooltip
              offset={20}
              contentStyle={{ backgroundColor: "#FFFF" }}
              content={<CustomTooltip />}
              cursor={<CustomCursor />}
            />
            <Line
              type="monotone"
              dataKey="duration"
              stroke="url(#grad)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "white" }}
            />
          </>
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

SessionDuration.propTypes = {
  data: PropTypes.array.isRequired,
  error: PropTypes.bool,
};

export default SessionDuration;
