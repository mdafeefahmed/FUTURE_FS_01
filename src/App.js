import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footers from "./Footers";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footers />
    </div>
  );
}

export default App;