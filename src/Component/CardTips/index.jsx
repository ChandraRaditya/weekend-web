import "./index.scss";
import arrowRight from "../../Assets/arrow-right.svg";

function CardTips({ text, image }) {
  return (
    <div className="card-tips" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-tips__content">
        <div className="card-tips__text">{text}</div>
        <button className="card-tips__button">
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CardTips;
