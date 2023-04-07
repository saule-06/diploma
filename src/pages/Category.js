import { useMatch } from "react-router-dom"

export default function Category() {
  const params = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "Chocolate cakes", slug: "chocolate-cakes" },
    { id: 2, name: "Birthday cakes", slug: "birthday-cakes" },
    { id: 3, name: "Cupcakes", slug: "cup-cakes" },
    { id: 4, name: "Honey cakes", slug: "honey-cakes" },
  ];

  const category = categories.find(
    (category) => category.slug === params.slug
  )
  return (
    <div className="Category">
      <h1>{Category.name}</h1>
    </div>
  );
}