import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({
  className = "",
  propBackgroundImage,
  rectangle20,
  rectangleDivHeight,
  frameDivHeight,
  frameDivWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      height: frameDivHeight,
      width: frameDivWidth,
    };
  }, [propBackgroundImage, frameDivHeight, frameDivWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      height: rectangleDivHeight,
    };
  }, [rectangleDivHeight]);

  return (
    <div className={`group-div ${className}`}>
      <div className="frame-child2" />
      <div className="frame-div" style={frameDivStyle}>
        <img className="rectangle-icon" alt="" src={rectangle20} />
        <div className="frame-child3" style={rectangleDivStyle} />
      </div>
      <div className="frame-wrapper">
        <div className="sobha-hearland-ii-villas-parent">
          <div className="sobha-hearland-ii">Sobha Hearland II Villas</div>
          <div className="lorem-ipsum-dolor1">
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
            bibendum.
          </div>
          <div className="stars-parent">
            <div className="stars">
              <img
                className="starinactivebig-icon"
                loading="lazy"
                alt=""
                src="/starinactivebig.svg"
              />
              <img
                className="starinactivebig-icon"
                loading="lazy"
                alt=""
                src="/starinactivebig-1.svg"
              />
              <img
                className="starinactivebig-icon"
                loading="lazy"
                alt=""
                src="/starinactivebig-2.svg"
              />
              <img
                className="starinactivebig-icon"
                loading="lazy"
                alt=""
                src="/starinactivebig-3.svg"
              />
              <img
                className="starinactivebig-icon"
                alt=""
                src="/starinactivebig-4.svg"
              />
            </div>
            <div className="starsvalue">4.83</div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  rectangle20: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  rectangleDivHeight: PropTypes.any,
  frameDivHeight: PropTypes.any,
  frameDivWidth: PropTypes.any,
};

export default GroupComponent2;
