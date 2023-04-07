import Nav from "../../Nav/Nav";
import logo from "../../assets/logo.png";
import "./Layout.css";
import Logo from "../Logo/Logo";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
      </header>
      <aside>
        <nav>NAV CATEGORIES</nav>
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
