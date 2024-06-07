import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

NavBar.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default NavBar;
