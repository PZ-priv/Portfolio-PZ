import PropTypes from "prop-types";
import plFlag from "../assets/pl.png"; 
import enFlag from "../assets/gb.svg";
import { Menu, X, User, Brain, FolderKanban, Phone } from "lucide-react";
import { useState } from "react";

const Navbar = ({ t, onLanguageChange, currentLanguage, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };
  return (
    <nav className="nav-gradient select-none sticky top-0 z-10 px-4 py-2 sm:py-3">
      <div className="flex items-center justify-between">
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <ul
        className={`navigation flex-col lg:flex-row lg:flex lg:justify-center items-center gap-4 lg:gap-6 transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        } lg:flex mt-4 lg:mt-0`}
      >
        {[
          { id: "about", label: t.about, icon: <User size={18} /> },
          { id: "skills", label: t.skills, icon: <Brain size={18} /> },
          {
            id: "projects",
            label: t.projects,
            icon: <FolderKanban size={18} />,
          },
          { id: "contact", label: t.contact, icon: <Phone size={18} /> },
        ].map(({ id, label, icon }) => (
          <li
            key={id}
            className={`w-[140px] text-center transition ${
              activeSection === id
                ? "text-[#efd297] font-semibold underline underline-offset-4"
                : "text-[#ffeabd] hover:text-white"
            }`}
          >
            <a
              href={`#${id}`}
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2"
            >
              {icon} {label}
            </a>
          </li>
        ))}

        <li className="flex items-center gap-2 justify-center flex-wrap text-sm w-full sm:w-auto">
          <span className="text-[#ffeabd]">{t.language}:</span>

          <button
            onClick={() => onLanguageChange("pl")}
            className={`flex items-center px-2 py-1 rounded transition ${
              currentLanguage === "pl"
                ? "bg-[#efd297] text-black"
                : "hover:text-white"
            }`}
          >
            <span className="mr-1">PL</span>
            <img src={plFlag} alt="PL" className="w-5" />
          </button>

          <button
            onClick={() => onLanguageChange("en")}
            className={`flex items-center px-2 py-1 rounded transition ${
              currentLanguage === "en"
                ? "bg-[#efd297] text-black"
                : "hover:text-white"
            }`}
          >
            <span className="mr-1">EN</span>
            <img src={enFlag} alt="EN" className="w-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  t: PropTypes.shape({
    about: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Navbar;
