import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Home.css";

const Home = () => (
  <div className="pokemon_hero">
    <div className="hero">
      <div className="pokemon_hero-content">
        <h1 className="pokemon_hero-text">
          Find all your <span className="span">favorite</span> Pokemon
        </h1>
        <Link to="/pokedex">
          <Button label="See Pokemons" className="hero-button cta-button" />
        </Link>
        <div className="hero-img"></div>
      </div>
    </div>
  </div>
);

export default Home;
