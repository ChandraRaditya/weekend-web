import "./index.scss";
import user_logo from "../../Assets/Bitmap.png";

function Header() {
  return (
    <header className="page-head">
      <div className="page-head__container">
        <img className="page-head__image" src={user_logo} alt="" />
        <div className="page-head__text-container">
          <p className="page-head__hello">Good Morning</p>
          <p className="page-head__username">Fellas</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
