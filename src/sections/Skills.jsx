import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrosoft } from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const iconMap = {
  ...SiIcons,
  FaMicrosoft,
};

const Skills = ({ t }) => {
  const [active, setActive] = useState(0);
  const hoverAreaRef = useRef(null);
  const intervalRef = useRef(null);

  const toggle = (index) => {
    setActive(index);
  };
  useEffect(() => {
    const next = () => {
      setActive((prev) => (prev + 1) % t.technologies.length);
    };

    const startInterval = () => {
      intervalRef.current = setInterval(next, 5000);
    };

    const stopInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const hoverArea = hoverAreaRef.current;
    if (hoverArea) {
      hoverArea.addEventListener("mouseenter", stopInterval);
      hoverArea.addEventListener("mouseleave", startInterval);
    }

    startInterval();

    return () => {
      if (hoverArea) {
        hoverArea.removeEventListener("mouseenter", stopInterval);
        hoverArea.removeEventListener("mouseleave", startInterval);
      }
      stopInterval();
    };
  }, [t.technologies.length]);

  // Grupowanie po kategoriach
  const grouped = t.technologies.reduce((acc, tech) => {
    acc[tech.category] = acc[tech.category] || [];
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      className="text-#a67a41 py-17 px-6 md:px-12 section  max-h-[80vh] overflow-y-auto md:max-h-none md:overflow-visible"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#b2874a] mb-12 text-center">
        {t.title}
      </h2>
      <div
        className="flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0"
        ref={hoverAreaRef}
      >
        {/* LEWA STRONA – lista technologii */}
        <div className="max-h-[calc(40vh-10rem)] w-100% md:w-1/2 md:max-h-[calc(90vh-10rem)] overflow-y-auto pr-2 min-h-[200px]">
          {Object.entries(grouped).map(([category, techs]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-[#ffeabd] mb-2">
                {category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
                {techs.map((tech) => {
                  const IconComponent = iconMap[tech.icon];
                  const isActive = active === t.technologies.indexOf(tech);

                  return (
                    <div
                      key={tech.name}
                      onClick={() => toggle(t.technologies.indexOf(tech))}
                      className={`flex flex-col items-center justify-center cursor-pointer rounded-lg transition transform duration-200 ease-in-out ${
                        isActive
                          ? "bg-[#b2874a] text-black scale-105 shadow-lg"
                          : "hover:bg-[#b2874a]/20 hover:scale-105"
                      }`}
                    >
                      <div className="w-20 h-20 mb-1 flex items-center justify-center">
                        {(tech.icon?.startsWith("Si") ||
                          tech.icon?.startsWith("Fa")) &&
                        IconComponent ? (
                          <>
                            <IconComponent
                              className={`w-12 h-12  ${
                                isActive
                                  ? "text-black scale-105 "
                                  : "hover:scale-105 text-[#b2874a]"
                              }`}
                            />
                          </>
                        ) : (
                          <i
                            className={`${tech.icon} text-[40px] ${
                              isActive
                                ? "text-black scale-105 "
                                : "hover:scale-105 text-[#b2874a]"
                            }`}
                          />
                        )}
                      </div>
                      <div className="text-xs mt-1">{tech.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* PRAWA STRONA – opis */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <AnimatePresence mode="wait">
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-xl px-6 py-8 text-lg text-center flex flex-col items-center"
              >
                {(() => {
                  const tech = t.technologies[active];
                  const iconName = tech?.icon;
                  const ActiveIcon = iconMap[iconName];

                  if (typeof ActiveIcon === "function") {
                    return (
                      <div className="mb-4">
                        <ActiveIcon className="w-16 h-16 " />
                      </div>
                    );
                  }
                  if (typeof iconName === "string") {
                    return <i className={`${iconName} text-[64px] mb-4  `} />;
                  }
                  return <span className="text-white mb-4">Brak ikony</span>;
                })()}
                <h4 className="text-xl font-semibold text-[#b2874a] mb-4">
                  {t.technologies[active].name}
                </h4>
                <p className="text-gray-200">
                  {t.technologies[active].description || "Brak opisu"}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Skills;
