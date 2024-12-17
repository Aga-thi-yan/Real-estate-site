import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  vuesaxlinearmessages,
  answerQuestions,
}) => {
  return (
    <div className={`vuesaxlinearmessages-parent ${className}`}>
      <img
        className="vuesaxlinearmessages-icon"
        loading="lazy"
        alt=""
        src={vuesaxlinearmessages}
      />
      <h2 className="answer-questions">{answerQuestions}</h2>
      <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. `}</div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  vuesaxlinearmessages: PropTypes.string,
  answerQuestions: PropTypes.string,
};

export default GroupComponent1;
