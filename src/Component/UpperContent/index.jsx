import "./index.scss";
import Bg from "../../Assets/BG.svg";
import oval from "../../Assets/Oval.svg";
import cosmonot from "../../Assets/cosmonot.png";
import cosmonotLeft from "../../Assets/cosmonot-left.png";

function UpperContent() {
  return (
    <div className="upper-content">
      <div className="top-section" style={{ backgroundImage: `url(${Bg})` }}>
        <h1 className="top-section__title">WEEKEND FROM HOME</h1>
        <p className="top-section__text">Stay active with little workout</p>
        <div className="top-section__search-container">
          <img className="top-section__cosmonot" src={cosmonot} alt="" />
          <input
            className="top-section__search"
            placeholder="Let's Go"
            type="text"
          />
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-section__cosmonot-left-decoration-container">
          <img
            className="bottom-section__cosmonot-left-decoration"
            src={cosmonotLeft}
            alt=""
          />
        </div>
        <p className="bottom-section__text">
          <span className="bottom-section__text_blue">Definition</span>; a
          practice or exercise to test or improve one's fitness for athletic
          competition, ability, or performance to exhaust (something, such as a
          mine) by working to devise, arrange, or achieve by resolving
          difficulties. <br /> Merriam-Webster.com Dictionary. <br />
          <span className="bottom-section__text_white">-weekend team</span>
        </p>
        <div className="bottom-section__oval-decoration-container">
          <img className="bottom-section__oval-decoration" src={oval} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UpperContent;