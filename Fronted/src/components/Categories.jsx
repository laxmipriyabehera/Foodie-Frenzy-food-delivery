import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Noodles",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
  },
];

function Categories() {
  return (
    <section className="categories">
      <h2>Explore Categories</h2>

      <div className="category-container">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>

            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;