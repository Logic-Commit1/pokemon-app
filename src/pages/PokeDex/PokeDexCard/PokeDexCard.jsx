import React from "react";
import "./PokeDexCard.css";

const PokeDexCard = ({ pokemon }) => {
  const { name, id, image, types } = pokemon;

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
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 card-container">
      <img src={image} alt={name} className="w-full h-48 object-fit-contain" />

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
