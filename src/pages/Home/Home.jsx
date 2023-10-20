import { Link } from "react-router-dom";
import Button from "src/components/Button/Button";
import bulbasaur from "src/assets/bulbasaur.png";
import pikachu from "src/assets/pikachu.png";
import charmander from "src/assets/charmander.png";
import pokeball from "src/assets/pokeball.png";

const Home = () => (
  <div className="h-96 relative mt-24">
    <div className="hero md:h-full">
      <div className="relative text-center p-5 pt-16 pb-10 md:h-full flex flex-col items-center md:flex-row-reverse mx-auto justify-evenly">
        <div className="hero-img flex justify-center items-baseline mb-10">
          <img
            className="max-w-sm md:pb-4 max-h-20 md:max-w-lg md:max-h-40	"
            src={bulbasaur}
            alt="bulbasaur"
          />
          <img
            className="max-w-sm max-h-28 md:max-w-lg md:max-h-48 m-0 lg:-ml-6 lg:-mr-9	"
            src={pikachu}
            alt="pikachu"
          />
          <img
            className="max-w-sm md:pb-4 max-h-24 md:max-w-lg md:max-h-44	"
            src={charmander}
            alt="charmander"
          />
          {/* <img
            className="absolute lg:mb-20 lg:ml-0 lg:pb-5 md:pb-4 md:mr-24 sm:pb-9 sm:mr-16 mb-0 mr-0 lg:mr-20 max-w-sm:pb-5 max-h-1 sm:max-w-lg sm:max-h-16 sm:scale-x--1"
            src={pokeball}
            alt="pokeball"
          /> */}
        </div>
        <div className="hero-text max-w-sm text-left	">
          <h1 className="text-4xl text-gray-950	 font-semibold mb-4">
            <span className="span text-red-700">Embark </span> on a Pokemon
            Adventure - <span className="span text-red-700">Catch</span> 'Em
            All!
          </h1>
          <p className="text-md text-red-900">
            Explore a vast Pokemon world and discover hidden gems.
          </p>
          <Link to="/pokedex">
            <Button
              label="Catch Now"
              className="drop-shadow-md	mt-6 px-3 py-2 text-white bg-yellow-950 font-semibold text-md leading-6 focus:outline-none cursor-pointer rounded max-w-screen-xs md:px-5 md:py-2 md:text-base md:bg-yellow-950 md:font-semibold md:leading-6 md:focus:outline-none md:cursor-pointer hover:bg-yellow-800 border-indigo-900 shadow-2xl"
            />
          </Link>
        </div>
      </div>
      <div className="featured-features py-10 md:py-10 md:pb-14 text-center bg-yellow-300">
        <h2 className="text-2xl text-black font-semibold pb-12 ">
          Pokemon App Features
        </h2>
        <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl	 mx-auto">
          <div className="feature-card relative text-center p-4 bg-white rounded-lg shadow-md max-w-xs mx-auto pt-20 pb-15">
            <img
              className="absolute top-4 left-1/3 ml-7 lg:mb-20 md:pb-5 mb-0 lg:mr-20 max-w-sm max-h-14 md:max-w-lg md:max-h-16 transform scale-80 sm:scale-100"
              src={pokeball}
              alt="Pokeball"
            />
            <h3 className="text-lg font-semibold mb-2 text-red-800">
              Powerful Search
            </h3>
            <p className="text-black">
              Find any Pokemon with ease using our advanced search feature.
            </p>
          </div>
          <div className="feature-card relative text-center p-4 bg-white rounded-lg shadow-md max-w-xs mx-auto pt-20">
            <img
              className="absolute top-4 left-1/3 ml-7 lg:mb-20 md:pb-5 mb-0 lg:mr-20 max-w-sm max-h-14 md:max-w-lg md:max-h-16 transform scale-80 sm:scale-100"
              src={pokeball}
              alt="Pokeball"
            />
            <h3 className="text-lg font-semibold mb-2 text-red-800">
              Filters and Sorting
            </h3>
            <p className="text-black">
              Sort and filter Pokemon by type. Now that's A customized
              experience.
            </p>
          </div>
          <div className="feature-card relative text-center p-4 bg-white rounded-lg shadow-md max-w-xs mx-auto pt-20">
            <img
              className="absolute top-4 left-1/3 ml-7 lg:mb-20 md:pb-5 mb-0 lg:mr-20 max-w-sm max-h-14 md:max-w-lg md:max-h-16 transform scale-80 sm:scale-100"
              src={pokeball}
              alt="Pokeball"
            />
            <h3 className="text-lg font-semibold mb-2 text-red-800">
              User-Friendly Interface
            </h3>
            <p className="text-black">
              Enjoy a seamless experience with our intuitive and user-friendly
              interface.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0"></div>
        </div>
        <div className="mt-4">
          <p className="text-center text-sm text-gray-400">
            &copy; 2023 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
);

export default Home;
