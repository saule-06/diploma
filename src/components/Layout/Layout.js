import Nav from "../../Nav/Nav";
import logo from "../../assets/logo.png";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <aside>
        <Logo />
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
