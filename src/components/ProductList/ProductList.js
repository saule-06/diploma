import { useContext } from "react";
import { AppContext } from "../../App";
import "./ProductList.css";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";

export default function ProductList({category}) {
  const { products } = useContext(AppContext);

  // const output = products.map(product => (
  //   <div key={product.id }>
  //     <img src={product.picture} alt={product.name} />
  //     <NavLink to={'/product/' + product.slug}>
  //       {product.name}
  //     </NavLink>
  //     <span>{product.price} $</span>
  //   </div>
  // ));

  const output = products.filter(product => product.category === category.id)
  .map(product => (
    <div className="Product" key={product.id}>
      <img src={product.picture} alt={product.name} />
      <NavLink to={'/products/' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.price} $</span>
      <p>{product.title}</p>
      <AddToCart product={product}/>
    </div>
  ));

  return (
    <div className="ProductList">
      {output}

      <AddProduct />
    </div>
  );
}