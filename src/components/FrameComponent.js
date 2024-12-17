import { Button } from "@mui/material";
import Logo from "./Logo";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={`rectangle-group ${className}`}>
      <div className="rectangle-div" />
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="navigation">
        <div className="menu">
          <div className="menu-child" />
          <div className="menu-items">
            <a
              className="about-us"
              href={`https://www.linkedin.com/in/agathiyan-b-3a92b0194/`}
              target="_blank"
            >
              About us
            </a>
          </div>
          <div className="menu-items">
            <a className="projects">Projects</a>
          </div>
          <div className="menu-items">
            <div className="agents">Agents</div>
          </div>
          <div className="menu-items">
            <a className="services">Services</a>
          </div>
          <div className="menu-items">
            <div className="listings">Listings</div>
          </div>
          <img
            className="vuesaxlinearsearch-normal-icon"
            loading="lazy"
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
        </div>
      </div>
      <div className="services-link">
        <div className="other-services-link">
          <div className="other-services-parent">
            <div className="other-services">Other services</div>
            <img
              className="vuesaxlineararrow-right-icon"
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowright@2x.png"
            />
          </div>
        </div>
        <Button
          className="contact-link"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1f1f1f",
            fontSize: "16",
            background: "#fefeff",
            border: "#bebebe solid 1px",
            borderRadius: "40px",
            "&:hover": { background: "#fefeff" },
            height: 60,
          }}
        >
          Contact us
        </Button>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
