import { Link } from "react-router-dom";
import "./Footer.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin-logo.svg";

function Footer({}) {
  return (
    <footer className="footer">
      <p className="footer__api">© 2025 Supersite, Powered by News API</p>
      <div className="footer__content">
        <Link to="/" className="footer__home-link">
          <p className="footer__home">Home</p>
        </Link>
        <a
          className="footer__site"
          href="https://tripleten.com"
          target="_blank"
        >
          TripleTen
        </a>
        <div className="footer__icons">
          <a href="https://github.com/tiagiron" target="_blank">
            <img className="footer__git" src={github} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/tia-giron-ms/" target="_blank">
            <img
              className="footer__linkedin"
              src={linkedin}
              alt="LinkedIn logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
