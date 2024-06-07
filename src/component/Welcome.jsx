// src/component/Welcome.jsx
import PropTypes from "prop-types";

/**
 * Composant représentant un message de bienvenue personnalisé.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.name - Le nom de l'utilisateur à afficher dans le message de bienvenue.
 * @returns {JSX.Element} Le composant Welcome.
 */

const Welcome = ({ name }) => {
  return (
    <div className="flex flex-col gap-6 xl:gap-10 ">
      <h1 className="text-5xl">Bienvenue, {name}!</h1>
      <p className="text-lg">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Welcome;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};
