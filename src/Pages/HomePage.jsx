import About from "../Components/Home/About";
import FunFacts from "../Components/Home/FunFacts";
import HeroSection from "../Components/Home/HeroSection";
import OurProducts from "../Components/Home/OurProducts";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <OurProducts />
      <About />
      <FunFacts />
    </div>
  );
}
