import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./TransferContainer.css";

const TransferContainer = ({ className = "" }) => {
  return (
    <div className={`transfer-container ${className}`}>
      <div className="services-content">
        <div className="transfer-description">
          <div className="service-card-inner">
            <div className="service-description-parent">
              <div className="service-description">
                <h1 className="the-transfer-of">The transfer of real estate</h1>
                <div className="three-steps-subtitle">
                  <div className="lorem-ipsum-dolor3">
                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                    sit pellentesque sollicitudin. Egestas faucibus lacus diam
                    in senectus consectetur. Mattis elit adipiscing quisque
                    tellus scelerisque vehicula ante nunc. Tellus consequat nisl
                    quis nisl justo.
                  </div>
                </div>
              </div>
              <div className="action-buttons-wrapper">
                <div className="action-buttons">
                  <Button
                    className="bookbtn"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fefeff",
                      fontSize: "16",
                      background: "#1f1f1f",
                      borderRadius: "40px",
                      "&:hover": { background: "#1f1f1f" },
                      height: 60,
                    }}
                  >
                    Book Now!
                  </Button>
                  <Button
                    className="bookbtn"
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
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="customer-segments">
              <div className="client-content">
                <div className="client-list">
                  <div className="client-title">
                    <div className="customer-type-icon">12+</div>
                  </div>
                  <div className="customer-type-icons">14+</div>
                  <div className="customer-type-icons1">10+</div>
                </div>
                <div className="client-types">
                  <div className="customers">Customers</div>
                  <div className="office">
                    <div className="offices">Offices</div>
                  </div>
                  <div className="students">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top-parent">
          <img
            className="footer-top-icon"
            loading="lazy"
            alt=""
            src="/rectangle-27@2x.png"
          />
          <div className="footer-bottom" />
        </div>
      </div>
    </div>
  );
};

TransferContainer.propTypes = {
  className: PropTypes.string,
};

export default TransferContainer;
