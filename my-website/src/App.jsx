import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <div className="min-h-screen bg-softGray">
      <Navbar />
      <Hero />
      <Stats />
      <Services />

      {/** Footer is next! */}
    </div>
  );
}

export default App;
