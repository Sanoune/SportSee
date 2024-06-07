import PropTypes from "prop-types";
import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

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

const SessionDuration = ({ data, error }) => {
  const graphData = [...data];
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
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
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
        {error && (
          <text x={30} y={70} fontSize={15}>
            Une erreur est survenue
          </text>
        )}
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
        ;
      </LineChart>
    </ResponsiveContainer>
  );
};

SessionDuration.propTypes = {
  data: PropTypes.array.isRequired,
  error: PropTypes.bool,
};

export default SessionDuration;
