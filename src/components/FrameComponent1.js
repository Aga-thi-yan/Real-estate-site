import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <footer className={`subscription-container-parent ${className}`}>
      <div className="subscription-container">
        <div className="subscription-content">
          <div className="subscription-form">
            <h1 className="subscribe-our-newsletter">
              Subscribe Our Newsletter
            </h1>
            <div className="lorem-ipsum-dolor4">
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc.
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="frame-child5" />
            <input className="frame-input" type="text" />
            <Button
              className="frame-child6"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fefeff",
                fontSize: "16",
                background: "#1f1f1f",
                borderRadius: "40px",
                "&:hover": { background: "#1f1f1f" },
                width: 147,
                height: 60,
              }}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      <div className="footer-image">
        <img
          className="image-placeholder-icon"
          alt=""
          src="/image-placeholder@2x.png"
        />
        <img
          className="d-rendering-isometric-fdgdf-1-icon"
          loading="lazy"
          alt=""
          src="/3drenderingisometricfdgdf-1@2x.png"
        />
      </div>
    </footer>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
