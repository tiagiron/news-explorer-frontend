import "./Navigation.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation({ openLoginModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className="nav">
      <button
        className={`nav__icon-menu ${isOpen ? `is-active` : ""}`}
        type="button"
        onClick={toggleMobileMenu}
      >
        <div className="nav__icon-menu-div" />
        <div className="nav__icon-menu-div" />
      </button>

      <div className={`nav__content ${isOpen ? `is-open` : ""} `}>
        <Link to="/" className="nav__home-link">
          <p className="nav__home">Home</p>
        </Link>
        <button
          className="nav__signin-btn"
          type="button"
          onClick={openLoginModal}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
export default Navigation;
