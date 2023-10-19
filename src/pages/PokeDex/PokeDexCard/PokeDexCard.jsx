import React from "react";
import "./PokeDexCard.css";

const PokeDexCard = ({ pokemon }) => {
  const { name, id, image, types } = pokemon;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
      <img src={image} alt={name} className="w-full h-48 object-fit-contain" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">ID: {id}</p>
        <p className="text-gray-700 text-base">Type: {types.join(", ")}</p>
      </div>
    </div>
  );
};

export default PokeDexCard;
