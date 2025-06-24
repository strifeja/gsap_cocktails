import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import About from "./components/About";
import Art from "./components/Art";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cocktails from "./components/cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default App;
