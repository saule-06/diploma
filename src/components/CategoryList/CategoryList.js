import { NavLink } from "react-router-dom";

export default function CategoryList() {
  const categories = [
    { id: 0, name: "All", slug: "" },
    { id: 1, name: "Chocolate cakes", slug: "chocolate-cakes" },
    { id: 2, name: "Birthday cakes", slug: "birthday-cakes" },
    { id: 3, name: "Cupcakes", slug: "cup-cakes" },
    { id: 4, name: "In cakes", slug: "in-cakes" },
  ];

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name}
      </NavLink>
    </li>
  ));
  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  );
}