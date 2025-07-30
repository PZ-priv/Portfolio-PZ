import PropTypes from "prop-types";
import myPhoto from "./../assets/men.png";

const About = ({ t }) => {
  return (
    <section
      id="about"
      className="section text-white py-17 px-6 md:px-12 flex items-center min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b2874a] mb-6">
          {t.title}
        </h2>
        <p className="text-lg leading-relaxed text-gray-200 mb-10">
          {t.description}
        </p>

        <div className="flex justify-center">
          <img
            src={myPhoto}
            alt="Moje zdjęcie"
            className="w-48 h-auto md:w-60 transition duration-300 hover:scale-105"
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
