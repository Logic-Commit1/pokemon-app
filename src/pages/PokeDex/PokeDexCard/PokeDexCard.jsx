const PokeDexCard = ({ pokemon }) => {
  const { name, image, types } = pokemon;

  const typeColors = {
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#78C850",
    poison: "#A040A0",
    flying: "#A890F0",
    bug: "#A8B820",
    normal: "#A8A878",
  };

  const cardContentColor = {
    fire: "#ffb47c",
    water: "#afc9ff",
    grass: "#adff84",
    poison: "#222228",
    flying: "#cbb9ff",
    bug: "#cbd957",
    normal: "#d2d2a3",
  };

  const responsiveBackgroundColor = cardContentColor[types[0].toLowerCase()];

  return (
    <div className="card w-60 overflow-hidden shadow-2xl rounded-2xl m-2 card-container bg-white pt-6">
      <img src={image} alt={name} className="w-full h-48 object-contain pb-4" />

      <div
        className="px-6 py-4"
        style={{ backgroundColor: responsiveBackgroundColor }}
      >
        <div className="font-bold text-xl mb-6">{name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Type:</span>{" "}
          {types.map((type, index) => (
            <span
              key={index}
              className={`text-gray-700 text-base pointer-events-none mr-2 pd-2 px-2 rounded-md`}
              style={{ backgroundColor: typeColors[type.toLowerCase()] }}
            >
              {type}
              {index < types.length - 1 ? "" : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokeDexCard;
