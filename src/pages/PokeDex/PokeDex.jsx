import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../queries";
import PokeDexCard from "./PokeDexCard/PokeDexCard";
import FilterModal from "./FilterModal/FilterModal";
import "./PokeDex.css";

const PokeDex = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  // Checks if the query is still loading
  if (loading) return <p>Loading...</p>;
  // Checks if an error occurred
  if (error) return <p>Error: {error.message}</p>;
  // Destructure the 'pokemons' data from the GraphQL query
  const { pokemons } = data;
  const extractedTypes = pokemons.map((pokemon) => pokemon.types).flat();
  const uniqueTypesList = [...new Set(extractedTypes)];

  const openFilterModal = () => {
    setFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModalOpen(false);
  };

  const handleSelectType = () => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      selectedTypes.some((type) => pokemon.types.includes(type))
    );
    setFilteredPokemons(filteredPokemons);
    closeFilterModal();
  };

  const clearFilters = () => {
    setFilteredPokemons(null);
    setSelectedTypes([]);
  };

  const filteredPokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pokemon-pokedex">
      <h2 className="text-2xl font-bold mb-9">PokeDex</h2>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-md p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        onClick={openFilterModal}
        className="filter-button bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4"
      >
        Filter by Type
      </button>

      <div className="flex flex-wrap justify-center	max-w-1300 gap-2.5">
        {!filteredPokemons
          ? filteredPokemonsByName.map((pokemon) => (
              <PokeDexCard key={pokemon.id} pokemon={pokemon} />
            ))
          : filteredPokemons.map((pokemon) => (
              <PokeDexCard key={pokemon.id} pokemon={pokemon} />
            ))}
      </div>
      {isFilterModalOpen && (
        <FilterModal
          typesList={uniqueTypesList}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          onClose={closeFilterModal}
          onSelectType={handleSelectType}
        />
      )}
      {filteredPokemons && (
        <button
          onClick={clearFilters}
          className="clear-filter-button bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default PokeDex;
