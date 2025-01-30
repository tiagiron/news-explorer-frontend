import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header({ openLoginModal }) {
  return (
    <div className="header__container">
      <header className="header">
        <Link to="/" className="header__title-link">
          <p className="header__title">NewsExplorer</p>
        </Link>
        <Navigation openLoginModal={openLoginModal} />
      </header>
    </div>
  );
}

export default Header;
