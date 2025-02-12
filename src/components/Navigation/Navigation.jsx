import "./Navigation.css";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logoutwhite from "../../assets/logout-white.svg";
import logoutblack from "../../assets/logout-black.svg";

function Navigation({ openLoginModal, isLoggedIn, handleLogOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const toggleMobileMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className={`nav ${isOpen ? "is-open" : ""}`}>
      <button
        className={`nav__icon-menu ${isOpen ? `is-active` : ""}`}
        type="button"
        onClick={toggleMobileMenu}
      >
        <div className="nav__icon-menu-div" />
        <div className="nav__icon-menu-div" />
      </button>

      <div className={`nav__content ${isOpen ? `is-open` : ""} `}>
        <Link
          to="/"
          className={`nav__home-link ${location.pathname === "/" ? "nav__home-link-home" : ""}`}
        >
          <p className="nav__home">NewsExplorer</p>
        </Link>
        <Link
          to="/"
          className={`nav__home-link ${location.pathname === "/" ? "nav__home-link-home" : ""}`}
        >
          <p className="nav__home">Home</p>
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/saved-news"
              className={`nav__articles ${isSavedNewsPage ? "nav__articles-saved" : "nav__articles-home"}`}
            >
              Saved Articles
            </Link>
            <button
              type="button"
              className={`nav__logout ${isSavedNewsPage ? "nav__logout-saved" : "nav__logout-home"}`}
              onClick={handleLogOut}
            >
              {currentUser?.name || "Tia"}
              <img
                src={isSavedNewsPage ? logoutblack : logoutwhite}
                className="nav__logout-icon"
                alt="Logout"
              />
            </button>
          </>
        ) : (
          <button
            className="nav__signin-btn"
            type="button"
            onClick={openLoginModal}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}
export default Navigation;
