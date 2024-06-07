import PropTypes from "prop-types";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function Score({ data }) {
  // Calculer la valeur pour le reste jusqu'à 100%
  const restValue = 1 - data;

  // Définir les données du graphique
  const chartData = [
    { name: "Score", value: data },
    { name: "Rest", value: restValue },
  ];
  const score = chartData[0].value * 100;

  // Définir les couleurs
  const COLORS = ["#FF0000", "rgba(0,0,0,0)"];

  return (
    <ResponsiveContainer
      width="100%"
      aspect={1}
      className="bg-sportsee-grey rounded-md"
    >
      <PieChart width="auto" height="auto">
        <circle
          cx={"50%"}
          cy={"50%"}
          r={70} // Ajustez la taille du cercle selon vos besoins
          fill="#fff" // Couleur de fond du cercle central
        />
        <g>
          <text
            x="20%"
            y="10%"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="12"
            fontWeight="bold"
          >
            Score
          </text>
          <text x={"50%"} y={"35%"} dy={8} textAnchor="middle">
            <tspan x="50%" dy="1.2em">{`${score} %`}</tspan>
            <tspan x="50%" dy="1.2em" fill="grey" fontSize="12">
              de votre
            </tspan>
            <tspan x="50%" dy="1.2em" fill="grey" fontSize="12">
              objectif
            </tspan>
          </text>
        </g>

        <Pie
          data={chartData}
          cx={"50%"}
          cy={"50%"}
          stroke=""
          startAngle={180}
          endAngle={-180}
          innerRadius={67} // Ajustez cette valeur pour réduire la taille du pourcentage
          outerRadius={75} // Ajustez cette valeur pour réduire la taille du cercle extérieur
          paddingAngle={5}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              cornerRadius={8}
              stroke="none"
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

Score.propTypes = {
  data: PropTypes.number.isRequired,
};
