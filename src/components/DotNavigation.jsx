import { useEffect, useState } from "react";

const sections = [
  { id: "header", label: "PZ" },
  { id: "about", label: "O mnie" },
  { id: "skills", label: "Umiejętności" },
  { id: "projects", label: "Projekty" },
  { id: "contact", label: "Kontakt" },
];

const DotNavigation = () => {
  const [activeSection, setActiveSection] = useState("header");

  useEffect(() => {
    const scrollContainer = document.querySelector("main");

    const handleScroll = () => {
      const scrollPosition =
        scrollContainer.scrollTop + scrollContainer.offsetHeight / 2;

      for (let s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(s.id);
            break;
          }
        }
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Haptic feedback
      if ("vibrate" in navigator) {
        navigator.vibrate(30);
      }

      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed z-50 right-4 top-1/2 -translate-y-1/2 flex-col gap-4 hidden lg:flex animate-fade-in select-none">
      {sections.map((s) => (
        <div
          key={s.id}
          className="group flex lg:flex-row-reverse items-center gap-2 cursor-pointer"
          onClick={() => handleDotClick(s.id)}
        >
          <div
            className={`w-4 h-4 rounded-full border-2 border-[#efd297] transition duration-300 ${
              activeSection === s.id ? "bg-[#efd297]" : "bg-transparent"
            }`}
          />
          <span className="text-[#efd297] text-sm opacity-0 group-hover:opacity-100 transition">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const DotNavigationMobile = () => {
  const [active, setActive] = useState("header");

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if ("vibrate" in navigator) navigator.vibrate(30);
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-50 lg:hidden select-none">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => handleClick(s.id)}
          title={s.label}
          className={`w-4 h-4 rounded-full border-2 border-[#efd297] transition ${
            active === s.id ? "bg-[#efd297]" : "bg-transparent"
          }`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;