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
      <div className=" gap-3 sm:bg-black bg-white flex sm:flex-row flex-col  justify-between sm:items-center items-start py-3 px-4 pr-8 text-black sm:text-stone-50">
        <img alt="logo" src={logo} className="w-auto h-16"></img>
        <div className="flex sm:flex-row flex-col sm:pt-0 pt-6 flex-1 gap-3 justify-around">
          <Link to="" className=" text-2xl">
            Accueil
          </Link>
          <Link to="/" className="text-2xl">
            Profil
          </Link>
          <Link to="/" className=" text-2xl">
            Réglage
          </Link>
          <Link to="/" className=" text-2xl">
            Communauté
          </Link>
        </div>
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
