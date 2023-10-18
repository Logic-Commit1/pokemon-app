import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, PokeDex } from "./pages";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<PokeDex />} />
      </Routes>
    </>
  );
};

export default App;
