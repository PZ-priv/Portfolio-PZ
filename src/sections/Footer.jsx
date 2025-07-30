import PropTypes from "prop-types";

const Footer = ({ t, children }) => {
  return (
    <footer id="contact" style={{ height: "10vh" }} className="text-center">
      <hr className="border-t border-[#b2874a] opacity-30 m-0 mb-3" />
      <p>
        {t.rights} <a href="mailto:ppzywert@gmail.com">ppzywert@gmail.com</a>
      </p>
      {children}
    </footer>
  );
};

// Definiujemy propTypes, aby ESLint nie zgłaszał błędu
Footer.propTypes = {
  // Obiekt `t` może być np. obiektem z polami string (rights), ale
  // możesz też zdefiniować bardziej szczegółowo za pomocą PropTypes.shape()
  t: PropTypes.shape({
    rights: PropTypes.string,
  }).isRequired,
  // children często są typu node (np. inny komponent)
  children: PropTypes.node,
};

export default Footer;
