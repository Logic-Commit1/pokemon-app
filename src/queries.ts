import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query getPokemons {
    pokemons(first: 20) {
      id
      name
      image
      types
    }
  }
`;

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  types: string[];
};
