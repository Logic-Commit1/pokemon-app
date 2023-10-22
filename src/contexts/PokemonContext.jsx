import React, { createContext, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "src/queries";

const PokemonContext = createContext();

export const usePokemon = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  return (
    <PokemonContext.Provider value={{ loading, error, data }}>
      {children}
    </PokemonContext.Provider>
  );
};
