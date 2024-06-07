import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * Composant de tooltip personnalisé pour le graphique d'activité.
 * @param {object} payload - Données de payload du tooltip.
 * @returns {JSX.Element} Composant de tooltip personnalisé.
 */
const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="bg-red-600 py-4 px-3 text-white text-xs flex flex-col justify-centre text-center gap-4">
        <p className="label">{`${payload[0].value}${payload[0].name}`}</p>
        <p className="label">{`${payload[1].value}${payload[1].name}`}</p>
      </div>
    );
  }
};

/**
 * Composant représentant le graphique d'activité.
 * @param {object} props - Propriétés du composant.
 * @param {Array} props.data - Données du graphique.
 * @param {boolean} props.error - Indicateur d'erreur.
 * @returns {JSX.Element} Composant du graphique d'activité.
 */
export default function Activity({ data, error }) {
  // Calcul des valeurs minimale et maximale de kg
  const minKg = Math.min(...data.map((item) => item.kg)) - 1;
  const maxKg = Math.max(...data.map((item) => item.kg));

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      aspect={3}
      className="bg-sportsee-grey p-4 xl:p-6 rounded-md"
    >
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-xs">Activité quotidienne</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-black block"></span>
            <p className="text-sportsee-textGrey text-xs">Poids (kg)</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-600 block"></span>
            <p className="text-sportsee-textGrey text-xs">
              {" "}
              Calories brûlées (kCal)
            </p>
          </div>
        </div>
      </div>
      {error && <div>Une erreur est survenue</div>}
      {!error && (
        <BarChart
          width="100%"
          height="100%"
          data={data.map((item, index) => ({ name: index + 1, ...item }))}
          margin={{
            top: 5,
            right: 0,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            width={26}
            yAxisId="kg"
            orientation="right"
            domain={[minKg, maxKg]}
            tickLine={false}
          />
          <YAxis yAxisId="kcal" hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="kg"
            dataKey="kg"
            fill="rgba(40, 45, 48, 1)"
            barSize={9}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="kcal"
            dataKey="kcal"
            fill="rgba(230, 0, 0, 1)"
            barSize={9}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
}

// Déclaration des types des props pour la validation
CustomTooltip.propTypes = {
  payload: PropTypes.array,
};

Activity.propTypes = {
  data: PropTypes.array.isRequired,
  error: PropTypes.bool,
};
