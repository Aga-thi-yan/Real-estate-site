import FrameComponent from "../components/FrameComponent";
import BookNowButton from "../components/BookNowButton";
import Projects from "../components/Projects";
import TransferContainer from "../components/TransferContainer";
import FrameComponent1 from "../components/FrameComponent1";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="landing-page-inner">
        <div className="frame-parent">
          <FrameComponent />
          <BookNowButton />
        </div>
      </section>
      <Projects />
      <section className="about">
        <div className="we-are-a-global-boutique-real-wrapper">
          <h1 className="we-are-a">
            We are a global, boutique real estate brokerage
          </h1>
        </div>
        <div className="transfer-container-parent">
          <TransferContainer />
          <FrameComponent1 />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
