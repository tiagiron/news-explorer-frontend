import "./Footer.css";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";

function Footer({}) {
  return (
    <footer className="footer">
      <p className="footer__api">© 2025 Supersite, Powered by News API</p>
      <div className="footer__content">
        <p>Home</p>
        <p>TripleTen</p>
        <div className="footer__icons">
          <img className="footer__git" src={github} alt="GitHub logo" />
          <img className="footer__fb" src={facebook} alt="Facebook logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
