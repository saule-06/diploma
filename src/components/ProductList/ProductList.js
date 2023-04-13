import { useContext } from "react";
import { AppContext } from "../../App";
import "./ProductList.css";
import { NavLink } from "react-router-dom";

export default function ProductList() {
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

  const output = products.map(product => (
    <div className="Product" key={product.id}>
      <img src={product.picture} alt={product.name} />
      <NavLink to={'/product/' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.slug} $</span>
    </div>
  ));

  return (
    <div className="ProductList">
      {output}
    </div>
  );
}