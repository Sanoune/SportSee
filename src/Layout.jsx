import PropTypes from "prop-types";
import logo from "./assets/logo.png";
import NavBar from "./component/NavBar";
import SideMenu from "./component/SideMenu";

/**
 * Composant représentant la mise en page de base de l'application.
 * Il comprend une barre de navigation, un menu latéral et un contenu principal.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {JSX.Element} props.children - Les éléments enfants à afficher dans le contenu principal.
 * @returns {JSX.Element} L'élément JSX représentant la mise en page de l'application.
 */
export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <NavBar logo={logo} />
      <div className="flex sm:flex-row sm:flex-1  flex-col ">
        <SideMenu />
        <div className="flex flex-1 justify-center overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Propriétés attendues par le composant Layout.
 *
 * @typedef {Object} LayoutProps
 * @property {JSX.Element} children - Les éléments enfants à afficher dans le contenu principal.
 */

/**
 * Valide les propriétés attendues par le composant Layout.
 *
 * @type {LayoutProps}
 */
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
