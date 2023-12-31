import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { useEffect, useState } from "react";
import { Skills } from "./components/Skills";
import { IconLinks } from "./components/IconLinks";
import { Experience } from "./components/Experience";

export const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
        <div
          className="gradient-container"
          style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px` }}
        >
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Skills />
          <Contact />
          <IconLinks />
        </div>
    </>
  )
}
