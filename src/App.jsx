import { useEffect, useState } from "react";
import gsap from "gsap";
import "./index.css";
import translations from "./translations";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

import DotNavigation, { DotNavigationMobile } from "./components/DotNavigation";
const App = () => {
  const [language, setLanguage] = useState("pl");

  // GSAP animacje
  useEffect(() => {
    gsap.from("header", {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: "power2.out",
      clearProps: "all",
    });
    gsap.from(".section", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
      clearProps: "all",
    });
  }, []);

const [activeSection, setActiveSection] = useState("header");

useEffect(() => {
  const main = document.querySelector("main");

  const handleScroll = () => {
    const scrollY = main.scrollTop + window.innerHeight / 2;

    const sections = ["header", "about", "skills", "projects", "contact"];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
          break;
        }
      }
    }
  };

  const mainEl = document.querySelector("main");
  mainEl.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => mainEl.removeEventListener("scroll", handleScroll);
}, []);

  // Funkcja do przełączania języka
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  // Teksty w zależności od wybranego języka
  const t = translations[language];

  return (
    <>
      <main>
        <Header t={t.header} />
        <Navbar
          t={t.navbar}
          onLanguageChange={handleLanguageChange}
          currentLanguage={language}
          activeSection={activeSection}
        />
        <About t={t.about} />
        <Skills t={t.skills} />
        <Projects t={t.projects} currentLanguage={language}/>
        <Contact t={t.contact}>
          <Footer t={t.footer}></Footer>
        </Contact>
      </main>
      <DotNavigation />
      <DotNavigationMobile />
    </>
  );
};

export default App;
