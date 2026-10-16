import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>🌙</button>
      <Hero name="Akhmad Yunus Subkhi" job="IT Technical Support Staff"/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );

}

export default App;