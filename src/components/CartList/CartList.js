import { useContext } from "react";
import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartList() {
  // получить список товаров и корзинку
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }
  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  // получить только ИД товаров в корзинке
  const productIds = Object.keys(cart);

  // чтобы вывести пройтись по товарам
  const output = products
    // удалить все товароы которые не в корзине
    .filter((product) => productIds.includes(product.id))
    // вывести товары и их кол-во
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img className="Cart_img" src={product.picture} alt={product.name} />
        <Link className="Cart_product" to={"/product/" + product.slug}>{product.name}</Link>

        <input
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)}
        />

        <span>{cart[product.id] * product.price} $</span>
        <button className="custom-btn btn-1"
          onClick={() => onItemRemove(product)}
        >Remove</button>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}