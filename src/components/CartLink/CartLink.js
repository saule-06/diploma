import { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./CartLink.css";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce(
    (acc, num) => acc + num, 0
  );

  return (
    <div className="CartLink">
      <NavLink to="/cart">
        Cart ({total})
      </NavLink>
    </div>
  )
}