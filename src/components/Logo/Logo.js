import "./Logo.css";
import logotip from "../../assets/logotip.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="logo"></NavLink>
      <img src={logotip} alt="logo" className="logo" />
    </div>
  );
}