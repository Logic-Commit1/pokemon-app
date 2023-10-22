import Features from "./Features/Features";
import Hero from "./Hero/Hero";

const HomePage = () => (
  <div className="relative mt-24">
    <div className="hero md:h-full">
      <Hero />
      <Features />
    </div>
  </div>
);

export default HomePage;
