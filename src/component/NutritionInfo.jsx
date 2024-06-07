import PropTypes from "prop-types";
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
      <div className=" flex px-6 items-center">
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

NutritionInfo.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  backgroundClass: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default NutritionInfo;
