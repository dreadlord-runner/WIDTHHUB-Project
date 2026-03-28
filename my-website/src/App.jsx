import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import FeatureOne from "./components/FeatureOne.jsx";
import FeatureTwo from "./components/FeatrueTwo.jsx";
import LogoGrid from "./components/LogoGrid.jsx";

function App() {
  return (
    <div className="min-h-screen bg-softGray">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <FeatureOne />
      <FeatureTwo />
      <LogoGrid />
      <Footer />

      {/** Other Componentds */}
    </div>
  );
}

export default App;
