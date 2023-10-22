import React from "react";
import { PokemonProvider } from "src/contexts/PokemonContext";
import { Route, Routes } from "react-router-dom";
import { HomePage, PokeDexPage } from "src/pages";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/pokedex"
          element={
            <PokemonProvider>
              <PokeDexPage />
            </PokemonProvider>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
