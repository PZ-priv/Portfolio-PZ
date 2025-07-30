import PropTypes from "prop-types";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = ({ t, children }) => {
  return (
    <>
      <section
        id="contact"
        className="section text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8 max-h-[95vh] overflow-y-auto"
      >
        <div className="w-full max-w-sm animate-fade-in flex justify-center">
          <img
            src={"./ja.png"}
            alt={t.menAlt}
            className="rounded-xl w-60vh h-auto "
          />
        </div>

        {/* Tekst kontaktowy */}
        <div className="max-w-xl w-full animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#b2874a]">
            {t.title}
          </h2>

          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <Mail size={22} className="text-[#b2874a]" />
              <span className="text-[#ffeabd]">
                <strong>{t.email}:</strong>{" "}
                <a
                  href="mailto:ppzywert@gmail.com"
                  className="hover:text-white underline transition"
                >
                  ppzywert@gmail.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={22} className="text-[#b2874a]" />
              <span className="text-[#ffeabd]">
                <strong>{t.linkedin}:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/pawe%C5%82-zywert/"
                  className="hover:text-white underline transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paweł Zywert
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Github size={22} className="text-[#b2874a]" />
              <span className="text-[#ffeabd]">
                <strong>{t.github}:</strong>{" "}
                <a
                  href="https://github.com/PZ-priv"
                  className="hover:text-white underline transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PZ-priv
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>
      {children}
    </>
  );
};

Contact.propTypes = {
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    menAlt: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default Contact;
