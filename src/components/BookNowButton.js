import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import "./BookNowButton.css";

const BookNowButton = ({ className = "" }) => {
  return (
    <div className={`book-now-button ${className}`}>
      <div className="hero-content">
        <div className="hero-left">
          <div className="image-and-title">
            <img className="hero-image-icon" alt="" src="/hero-image@2x.png" />
            <img
              className="image-and-title-child"
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
          <div className="three-steps-three">Three steps. Three minutes.</div>
          <div className="hero-title">
            <div className="welcome-to-realstate">Welcome to Realstate</div>
            <div className="description">
              <h1 className="manage-your-property">Manage Your Property</h1>
              <div className="your-will-have">
                Your will have everything nearby supermarket, buses , station,
                the carmen neighborhood, etc
              </div>
              <div className="rectangle-container">
                <div className="frame-child1" />
                <TextField
                  className="frame-textfield"
                  placeholder="Enter your email"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "42px",
                      borderRadius: "0px 0px 0px 0px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.45)" },
                  }}
                />
                <Button
                  className="group-button"
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
        </div>
      </div>
      <div className="testimonial">
        <h1 className="everything-should-be">
          Everything should be this easy.
        </h1>
      </div>
      <div className="frame-group">
        <GroupComponent1
          vuesaxlinearmessages="/vuesaxlinearmessages.svg"
          answerQuestions="Answer questions"
        />
        <GroupComponent1
          vuesaxlinearmessages="/vuesaxlinearsmstracking.svg"
          answerQuestions="Select a quote"
        />
        <GroupComponent1
          vuesaxlinearmessages="/vuesaxlinearedit2.svg"
          answerQuestions="Get registered"
        />
      </div>
    </div>
  );
};

BookNowButton.propTypes = {
  className: PropTypes.string,
};

export default BookNowButton;
