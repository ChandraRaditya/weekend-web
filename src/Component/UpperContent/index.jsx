import "./index.scss";
import Bg from "../../Assets/BG.svg";
import cosmonot from "../../Assets/cosmonot.png";

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
      <div className="bottom-section"></div>
    </div>
  );
}

export default UpperContent;
