import PropTypes from "prop-types";

const Header = ({ t }) => {
  return (
    <header id="header">
      <div className="logo-container">
        <img
          src="/logo.png"
          alt={t.imgAlt}
          className="logo"
          style={{
            borderRadius: "50%",
            // boxShadow: "-8px 4px 20px 0 #a67a412a",
            margin: "auto",
            height: "40vh",
            marginTop: "15vh",
          }}
        />
      </div>
      <img
        src="/pz.png"
        alt={t.imgAlt}
        className="logo"
        style={{
          // boxShadow: "-8px 4px 20px 0 #a67a412a",
          height: "20vh",
          margin: "auto",
        }}
      />
      <h2 className="subtitle">{t.subtitle}</h2>
    </header>
  );
};

Header.propTypes = {
  t: PropTypes.shape({
    imgAlt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;