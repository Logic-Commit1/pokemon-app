import pokeball from "src/assets/pokeball.png";

function Features() {
  return (
    <div className="featured-features py-10 md:py-10 md:pb-14 text-center bg-yellow-300">
      <h2 className="text-2xl text-yellow-950 font-semibold pb-12 ">
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
            Sort and filter Pokemon by type. Now that's A customized experience.
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
  );
}

export default Features;
