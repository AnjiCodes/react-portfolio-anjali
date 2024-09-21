import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { motion, useScroll, useSpring } from "framer-motion"; // Import useSpring

const App = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, // Control the spring stiffness
    damping: 30, // Control the spring damping
    mass: 1, // Adjust the mass for spring
  });

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* Scroll Progress Bar with useSpring */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-slateblue origin-left z-50 rounded-full"
        style={{ scaleX }} // Apply the smooth animation
      />

      {/* Background & Main Content */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_17%,#000_55%,#000_110%)]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
