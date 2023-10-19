import { GET_POKEMONS } from "src/queries";
import { useQuery } from "@apollo/client";

export const getPokemons = async () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Return pokemons if data is not null, else return empty array
  return data?.pokemons || [];
};

export const getUniquePokemonTypes = async () => {
  const pokemons = await getPokemons();

  // Check if pokemons is an array before calling map()
  if (!Array.isArray(pokemons)) {
    return [];
  }

  const extractedTypes = pokemons.map((pokemon) => pokemon.types).flat();
  const uniqueTypesList = [...new Set(extractedTypes)];

  return uniqueTypesList;
};
