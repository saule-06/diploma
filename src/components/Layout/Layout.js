import Nav from "../../Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
        <CartLink />
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
