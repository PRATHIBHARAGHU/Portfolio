import { ThemeProvider } from "@/context/ThemeContext";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Timeline } from "@/sections/Timeline";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Timeline />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
