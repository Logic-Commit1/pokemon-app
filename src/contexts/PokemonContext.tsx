import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "src/queries";

type PokemonContextValue = {
  loading: boolean;
  error: any;
  data: any;
};

const PokemonContext = createContext<PokemonContextValue | undefined>(
  undefined
);

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};

interface PokemonProviderProps {
  children: ReactNode;
}

export const PokemonProvider: React.FC<PokemonProviderProps> = ({
  children,
}) => {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  return (
    <PokemonContext.Provider value={{ loading, error, data }}>
      {children}
    </PokemonContext.Provider>
  );
};
