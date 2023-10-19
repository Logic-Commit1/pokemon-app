const PokeDexCard = ({ pokemon }) => {
  const { name, image, types } = pokemon;

  const typeColors = {
    fire: "bg-fire",
    water: "bg-water",
    grass: "bg-grass",
    poison: "bg-poison",
    flying: "bg-flying",
    bug: "bg-bug",
    normal: "bg-normal",
  };

  return (
    <div className="card w-60 overflow-hidden shadow-2xl rounded-2xl	m-2 card-container bg-white pt-6">
      <img src={image} alt={name} className="w-full h-48 object-contain pb-4" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-6">{name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Type:</span>{" "}
          {types.map((type, index) => (
            <span
              key={index}
              className={`text-gray-700 text-base pointer-events-none mr-2 pd-2 px-2 rounded-md ${
                typeColors[type.toLowerCase()]
              }`}
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
