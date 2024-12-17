import PropTypes from "prop-types";
import "./Logo.css";

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo ${className}`}>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="frame-item" />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/rectangle-12.svg"
        />
      </div>
      <img className="build-icon" loading="lazy" alt="" src="/build.svg" />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
