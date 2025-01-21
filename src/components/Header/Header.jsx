import { Link } from "react-router-dom";
import "./Header.css";

function Header({ openLoginModal }) {
  return (
    <header className="header">
      <nav className="header__content">
        <p className="header__title">NewsExplorer</p>
        <div className="header__nav">
          <Link to="/" className="header__home-link">
            <p className="header__home">Home</p>
          </Link>
          <button
            className="header__signin-btn"
            type="button"
            onClick={openLoginModal}
          >
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
