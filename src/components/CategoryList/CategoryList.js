import { getDocs } from "firebase/firestore/lite";
import { NavLink } from "react-router-dom";
import { categories } from "../../firebase";
import { useEffect, useState } from "react";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

useEffect(() => {
  getDocs(categories).then(snapshot => {
    const newCategoryList = [];
    snapshot.docs.forEach(doc => {
      const category = doc.data(); //{ name: "...", slug: "..."}
      category.id = doc.id;

      newCategoryList.push(category);
    })
    setCategoryList(newCategoryList);
  });
}, []);  

  // const categories = [
  //   { id: 0, name: "All", slug: "" },
  //   { id: 1, name: "Chocolate cakes", slug: "chocolate-cakes" },
  //   { id: 2, name: "Birthday cakes", slug: "birthday-cakes" },
  //   { id: 3, name: "Cupcakes", slug: "cup-cakes" },
  //   { id: 4, name: "In cakes", slug: "in-cakes" },
  // ];

  const output = categoryList.map(category => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
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