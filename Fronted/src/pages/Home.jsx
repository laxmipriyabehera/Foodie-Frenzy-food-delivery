import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/foods"
        );

        const data = await response.json();

        if (!response.ok) {
          console.error(data);
          return;
        }

        setFoods(data.foods || data);
      } catch (error) {
        console.error("Failed to fetch foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  return (
    <>
      <Hero />

      <Categories />

      <section className="popular-foods">
          <div className="food-container">
            {foods.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))}
          </div>
      </section>
    </>
  );
}

export default Home;