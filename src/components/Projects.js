import GroupComponent2 from "./GroupComponent2";
import PropTypes from "prop-types";
import "./Projects.css";

const Projects = ({ className = "" }) => {
  return (
    <section className={`projects1 ${className}`}>
      <div className="project-content">
        <div className="project-title">
          <div className="best-project-of">Best Project of the Years</div>
        </div>
        <div className="recent-projects">
          <div className="recent-projects-container">
            <div className="recent-projects-header">
              <h1 className="our-recent-projects">Our recent projects</h1>
              <div className="project-cards">
                <div className="frame-container">
                  <img
                    className="group-icon"
                    loading="lazy"
                    alt=""
                    src="/group-10.svg"
                  />
                  <img
                    className="group-icon"
                    loading="lazy"
                    alt=""
                    src="/group-11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="image-placeholders-parent">
              <div className="image-placeholders" />
              <img
                className="card-info-icon"
                loading="lazy"
                alt=""
                src="/rectangle-19@2x.png"
              />
              <div className="card-title-wrapper">
                <div className="card-title">
                  <div className="sobha-hearland-ii1">
                    Sobha Hearland II Villas
                  </div>
                  <div className="lorem-ipsum-dolor2">
                    Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                    bibendum.
                  </div>
                  <div className="rating">
                    <div className="stars1">
                      <img
                        className="starinactivebig-icon5"
                        loading="lazy"
                        alt=""
                        src="/starinactivebig.svg"
                      />
                      <img
                        className="starinactivebig-icon5"
                        loading="lazy"
                        alt=""
                        src="/starinactivebig-1.svg"
                      />
                      <img
                        className="starinactivebig-icon5"
                        loading="lazy"
                        alt=""
                        src="/starinactivebig-2.svg"
                      />
                      <img
                        className="starinactivebig-icon5"
                        loading="lazy"
                        alt=""
                        src="/starinactivebig-3.svg"
                      />
                      <img
                        className="starinactivebig-icon5"
                        loading="lazy"
                        alt=""
                        src="/starinactivebig-4.svg"
                      />
                    </div>
                    <div className="starsvalue1">4.83</div>
                  </div>
                </div>
              </div>
            </div>
            <GroupComponent2 rectangle20="/rectangle-20@2x.png" />
            <GroupComponent2
              propBackgroundImage="url('/rectangle-21@2x.png')"
              rectangle20="/rectangle-21@2x.png"
              rectangleDivHeight="100%"
              frameDivHeight="263px"
              frameDivWidth="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
