import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/pokemon-logo.png";

import "./Navbar.css";

const Menu = ({ onCloseMenu, toggleMenu }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    onCloseMenu();
  };

  return (
    <div
      className={`md:static fixed md:bg-transparent bg-amber-300 md:min-h-fit min-h-[20vh] left-0 top-[9%] w-full items-center px-5 z-10 ${
        toggleMenu ? "flex" : "hidden"
      }`}
    >
      <ul className="flex md:flex-row flex-col md:items-center gap-8 ">
        <li
          className={
            location.pathname === "/"
              ? "active-link text-yellow-400"
              : "text-white"
          }
        >
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li
          className={
            location.pathname === "/pokedex"
              ? "active-link text-yellow-400"
              : "text-white"
          }
        >
          <Link to="/pokedex" onClick={handleLinkClick}>
            Pokedex
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="pokemon_navbar py-6 bg-indigo-950">
      <div className="container flex justify-between items-center w-[75%] mx-auto">
        <div className="pokemon_navbar-links_logo">
          <Link to="/">
            <img className="w-32" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="pokemon_navbar-links">
          <div className="pokemon_navbar-links_container">
            <Menu onCloseMenu={closeMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
        <div className="pokemon_navbar-menu block md:hidden">
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
                <Menu onCloseMenu={closeMenu} toggleMenu={toggleMenu} />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
