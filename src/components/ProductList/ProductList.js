import { useContext } from "react";
import { AppContext } from "../../App";
import "./ProductList.css";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({category}) {
  const { products } = useContext(AppContext);


  const output = products.filter(product => product.category === category.id)
  .map(product => (
    <div className="Product" key={product.id}>
      <img src={product.picture} alt={product.name} />
      <h3><NavLink to={'/products/' + product.slug}>
        {product.name}
      </NavLink></h3>
      <span className="price">{product.price} $</span>
      <p>{product.title}</p>
      <div className="addcard"><AddToCart product={product} /> </div>
      <DeleteProduct product={product} />
    </div>
  ));

  return (
    <div className="ProductList">
      {output}

      <AddProduct category={category} />
    </div>
  );
}