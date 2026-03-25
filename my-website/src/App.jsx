import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Stats from "./components/Stats.jsx";

function App() {
  return (
    <div className="min-h-screen bg-softGray">
      <Navbar />
      <Hero />
      <Stats />

      {/** Services is next! */}
    </div>
  );
}

export default App;
