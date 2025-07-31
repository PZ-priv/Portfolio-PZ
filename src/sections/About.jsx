import PropTypes from "prop-types";
import myPhoto from "./../assets/men.png";

const About = ({ t }) => {
  return (
    <section
      id="about"
      className="section text-white py-17 px-6 md:px-12 flex items-center min-h-screen"
    >
      <div
        className="w-full max-w-4xl mx-auto text-center space-y-8
               max-h-[80vh] overflow-y-auto md:max-h-none md:overflow-visible"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b2874a] mb-6">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-200 px-2 break-words">
          {t.description}
        </p>

        <div className="flex justify-center">
          <img
            src={myPhoto}
            alt="Moje zdjęcie"
            className="w-32 sm:w-40 md:w-60 max-h-[60vh] transition duration-300 hover:scale-105"
            style={{
              filter: "drop-shadow(0 0 10px #d4af37)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "drop-shadow(0 0 20px #d4af37)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "drop-shadow(0 0 10px #d4af37)")
            }
          />
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  navbarOffset:PropTypes
};

export default About;
