import { Link } from "react-router-dom";
import Button from "src/components/Button/Button";
import img1 from "src/assets/bulbasaur.png";
import img2 from "src/assets/pikachu.png";
import img3 from "src/assets/charmander.png";

const Home = () => (
  <div className="h-96 relative">
    <div className="hero md:h-full">
      <div className="relative text-center p-5 pt-16 md:h-full flex flex-col items-center md:flex-row-reverse mx-auto justify-evenly">
        <div className="hero-img flex justify-center items-baseline mb-10">
          <img
            className="max-w-sm md:pb-10 max-h-20 md:max-w-lg md:max-h-40	"
            src={img1}
            alt="bulbasaur"
          />
          <img
            className="max-w-sm max-h-28 md:max-w-lg md:max-h-48 m-0 lg:-ml-6 lg:-mr-9	"
            src={img2}
            alt="pikachu"
          />
          <img
            className="max-w-sm md:pb-8 max-h-24 md:max-w-lg md:max-h-44	"
            src={img3}
            alt="charmander"
          />
        </div>
        <div className="hero-text max-w-sm text-left	">
          <h1 className="text-4xl text-gray-950	 font-semibold mb-10">
            Find all your <span className="span text-blue-700">favorite</span>{" "}
            Pokemon
          </h1>
          <p className="text-base">
            Seamless Searching for Pokemon is now possible! Catch 'em all now!
          </p>
          <Link to="/pokedex">
            <Button
              label="Catch Now"
              className="mt-6 px-3 py-2 text-indigo-950 bg-blue-600 font-semibold text-lg leading-6 focus:outline-none cursor-pointer rounded max-w-screen-xs md:px-5 md:py-2 md:text-base md:bg-blue-600 md:font-semibold md:leading-6 md:focus:outline-none md:cursor-pointer hover:bg-blue-800 border-indigo-900"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
