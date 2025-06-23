import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
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
    </main>
  );
};

export default App;
