import "./index.scss";
import cosmonotBottom from "../../Assets/cosmonot-bottom.png";
import candy from "../../Assets/candy.svg";
import CardTips from "../CardTips";

function LowerContent(props) {
  const tipsCard = props.dataTips.map((val) => {
    return <CardTips key={val.id} text={val.title} image={val.image} />;
  });

  return (
    <div className="lower-content">
      <div className="lower-content__section text-section">
        <div className="text-section__container">
          <h2 className="text-section__title">POV</h2>
          <p className="text-section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
        </div>
      </div>
      <div className="lower-content__section text-section">
        <div className="text-section__container">
          <h2 className="text-section__title">Resource</h2>
          <p className="text-section__text">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>
        </div>
      </div>
      <div className="lower-content__section tips-section">
        <div className="tips-section__container">
          {tipsCard}
          <div className="tips-section__decoration">
            <img src={candy} alt="" />
          </div>
        </div>
      </div>
      <div className="lower-content__bottom-part">
        <div className="lower-content__section text-section">
          <div className="text-section__container">
            <h2 className="text-section__title">You’re all set.</h2>
            <p className="text-section__text">
              The wise man therefore always holds in these matters to this
              principle of selection.
            </p>
          </div>
        </div>
        <img
          className="lower-content__image-decoration"
          src={cosmonotBottom}
          alt=""
        />
      </div>
    </div>
  );
}

export default LowerContent;
