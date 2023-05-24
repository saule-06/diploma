import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Footer.css";

function Footer() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        <span>{category.name}</span>
      </NavLink>
    </li>
  ));
  return (
      <footer className="footer">
        <div className="footer-container">
        <div className="footer-column">
          <h4 className="footer-heading">Categories</h4>
          <ul className="footer-list">{output}</ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Menus</h4>
          <ul className="footer-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/deliver">Delivery</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <div className="directions-to-administrator">
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps?q=42.499292,%2078.412108"
            >
              Adress: Esenina 1
            </a>
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="tel:+996 500 92 37 37"
            >
              +996 707 518 571
            </a>
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="mailto:orozobekovdosbol07@gmail.com"
            >
              tojgonbaevasaule@gmail.com
            </a>
          </div>
        </div>
      </div>
      </footer>
  
  );
}

export default Footer;
