import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Composant représentant la barre de navigation.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.logo - L'URL du logo de l'application.
 * @returns {JSX.Element} Composant NavBar.
 */
function NavBar({ logo }) {
  return (
    <>
      <div className="bg-black flex justify-between items-center py-3 px-4 pr-8">
        <img alt="logo" src={logo} className="w-auto h-16"></img>
        <Link to="" className="text-stone-50 text-2xl">
          Accueil
        </Link>
        <Link to="/" className="text-stone-50 text-2xl">
          Profil
        </Link>
        <Link to="/" className="text-stone-50 text-2xl">
          Réglage
        </Link>
        <Link to="/" className="text-stone-50 text-2xl">
          Communauté
        </Link>
      </div>
    </>
  );
}

// Définition des types de props
NavBar.propTypes = {
  /** L'URL du logo de l'application */
  logo: PropTypes.string.isRequired,
};

export default NavBar;
