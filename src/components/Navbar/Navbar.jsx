import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/pokemon-logo.png";

import "./Navbar.css";

const Menu = ({ onCloseMenu }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    onCloseMenu();
  };

  return (
    <>
      <p className={location.pathname === "/" ? "active-link" : ""}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </p>
      <p className={location.pathname === "/pokedex" ? "active-link" : ""}>
        <Link to="/pokedex" onClick={handleLinkClick}>
          Pokedex
        </Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="pokemon_navbar bg-yellow-700">
      <div className="pokemon_navbar-links_logo">
        <Link to="/">
          <img className="w-32" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="pokemon_navbar-links">
        <div className="pokemon_navbar-links_container">
          <Menu onCloseMenu={closeMenu} />
        </div>
      </div>
      <div className="pokemon_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={25}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={25}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="pokemon_navbar-menu_container scale-up-center">
            <div className="pokemon_navbar-menu_container-links">
              <Menu onCloseMenu={closeMenu} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
