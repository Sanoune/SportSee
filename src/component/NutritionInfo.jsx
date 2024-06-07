import PropTypes from "prop-types";

/**
 * Composant représentant les informations nutritionnelles.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.imageSrc - L'URL de l'image représentant l'information nutritionnelle.
 * @param {number|string} props.value - La valeur de l'information nutritionnelle.
 * @param {string} props.label - Le libellé de l'information nutritionnelle.
 * @param {string} props.unit - L'unité de mesure de l'information nutritionnelle.
 * @param {string} props.backgroundClass - La classe CSS pour le fond de l'élément.
 * @param {boolean} props.error - Indique s'il y a une erreur dans les données.
 * @returns {JSX.Element} Composant NutritionInfo.
 */
function NutritionInfo({
  imageSrc,
  value,
  label,
  unit,
  backgroundClass,
  error,
}) {
  return (
    <div className="flex gap-5 bg-sportsee-grey rounded ">
      <div className="flex px-6 items-center">
        <div className={`${backgroundClass} flex p-2 w-10 justify-center`}>
          <img src={imageSrc} alt={label} className=" h-full w-full" />
        </div>
        <div className="flex flex-col justify-center px-2 xl:px-10 py-6 xl:py-9">
          <p className="flex text-xl">
            {error && <span>Error</span>}
            {!error && (
              <span>
                {value}
                {unit}
              </span>
            )}
          </p>
          <p className="flex text-sportsee-textGrey">{label}</p>
        </div>
      </div>
    </div>
  );
}

// Définition des types de props
NutritionInfo.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  backgroundClass: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default NutritionInfo;
