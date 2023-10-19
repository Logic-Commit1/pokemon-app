import React from "react";
import "./PokeDex.css";

import { gql } from "@apollo/client";
import client from "../../apolloClient";

client.query({
  query: gql`
    query getPokemons {
      pokemons(first: 20) {
        id
        number
        name
      }
    }
  `,
});
/* .then((result) => console.log(result)); */

const PokeDex = () => (
  <div className="pokemon-pokedex">
    <p>Pokemon List here...</p>
  </div>
);

export default PokeDex;
