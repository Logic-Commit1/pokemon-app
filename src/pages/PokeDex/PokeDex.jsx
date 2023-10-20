import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "src/queries";
import PokeDexCard from "./PokeDexCard/PokeDexCard";
import FilterModal from "./FilterModal/FilterModal";
import { FiFilter } from "react-icons/fi";

const PokeDex = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Checks if the query is still loading
  if (loading) return <center className="mt-10 text-xl">Loading...</center>;
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
    <div className="pokemon-pokedex flex justify-center items-center flex-col mt-12">
      <h2 className="text-2xl font-bold mb-9">PokeDex</h2>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-md p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80 lg:w-full mb-5"
      />
      <div className="grid items-start">
        <button
          onClick={openFilterModal}
          className="filter-button bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4 flex items-center justify-evenly"
        >
          Filter
          <FiFilter className="text-sm ml-3" />
        </button>
        {filteredPokemons && (
          <button
            onClick={clearFilters}
            className="clear-filter-button bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Clear Filters
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-center	max-w-1300 gap-2.5 pb-10">
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
    </div>
  );
};

export default PokeDex;
