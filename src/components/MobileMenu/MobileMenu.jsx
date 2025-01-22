import "./MobileMenu.css";

function MobileMenu({ toggleMobileMenu, isMobileMenuOpened }) {
  return (
    <div className="mobile__menu">
      <div
        className={`mobile__nav-container ${
          isMobileMenuOpened ? "mobile__nav-container_active" : ""
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="mobile__close"
        ></button>
        <p className="header__title">NewsExplorer</p>
        <nav className="mobile__nav">
          <Link to="/" className="header__home-link">
            <p className="mobile__home">Home</p>
          </Link>
          <button
            className="mobile__signin-btn"
            type="button"
            onClick={openLoginModal}
          >
            Sign In
          </button>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
