import React, { useState } from "react";
import "./Menu.css";

const categories = [
  { id: "breakfast", name: "Breakfast", icon: "🍳" },
  { id: "lunch", name: "Lunch", icon: "🍱" },
  { id: "dinner", name: "Dinner", icon: "🍝" },
  { id: "dessert", name: "Dessert", icon: "🍰" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
];

const foods = [
  // ================= BREAKFAST =================
  {
    id: 1,
    name: "Pancakes",
    category: "breakfast",
    description: "Soft pancakes served with fresh fruits and honey.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "English Breakfast",
    category: "breakfast",
    description: "Eggs, toast, sausage, beans and fresh vegetables.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Avocado Toast",
    category: "breakfast",
    description: "Crispy toast topped with creamy avocado and herbs.",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "French Toast",
    category: "breakfast",
    description: "Golden French toast with berries and maple syrup.",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Veg Sandwich",
    category: "breakfast",
    description: "Fresh vegetables, cheese and herbs between toasted bread.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1521390188846-e2a2f1e5c1c1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Waffles",
    category: "breakfast",
    description: "Crispy golden waffles served with berries and cream.",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80",
  },

  // ================= LUNCH =================
  {
    id: 7,
    name: "Chicken Biryani",
    category: "lunch",
    description: "Aromatic basmati rice cooked with tender chicken.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Veg Thali",
    category: "lunch",
    description: "Complete Indian meal with rice, roti, dal and vegetables.",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "Pasta Alfredo",
    category: "lunch",
    description: "Creamy Alfredo pasta with herbs and parmesan.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "Veg Fried Rice",
    category: "lunch",
    description: "Fragrant fried rice tossed with fresh vegetables.",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 11,
    name: "Paneer Butter Masala",
    category: "lunch",
    description: "Soft paneer cooked in a rich creamy tomato gravy.",
    price: 239,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 12,
    name: "Chicken Wrap",
    category: "lunch",
    description: "Grilled chicken, vegetables and creamy sauce in a soft wrap.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80",
  },

  // ================= DINNER =================
  {
    id: 13,
    name: "Cheese Pizza",
    category: "dinner",
    description: "Stone-baked pizza with mozzarella and tomato sauce.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 14,
    name: "Classic Burger",
    category: "dinner",
    description: "Juicy burger with lettuce, tomato and special sauce.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 15,
    name: "Grilled Chicken",
    category: "dinner",
    description: "Tender grilled chicken served with fresh vegetables.",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 16,
    name: "Creamy Pasta",
    category: "dinner",
    description: "Creamy pasta tossed with herbs and fresh ingredients.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 17,
    name: "Chicken Steak",
    category: "dinner",
    description: "Juicy grilled chicken steak served with vegetables.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 18,
    name: "Margherita Pizza",
    category: "dinner",
    description: "Classic pizza topped with tomato, mozzarella and basil.",
    price: 269,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80",
  },

  // ================= DESSERT =================
  {
    id: 19,
    name: "Chocolate Cake",
    category: "dessert",
    description: "Rich chocolate cake covered with creamy chocolate.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 20,
    name: "Strawberry Cheesecake",
    category: "dessert",
    description: "Creamy cheesecake topped with fresh strawberries.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 21,
    name: "Chocolate Brownie",
    category: "dessert",
    description: "Warm chocolate brownie with a rich fudgy center.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 22,
    name: "Vanilla Ice Cream",
    category: "dessert",
    description: "Creamy vanilla ice cream topped with chocolate.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 23,
    name: "Fruit Tart",
    category: "dessert",
    description: "Crispy tart filled with cream and fresh seasonal fruits.",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 24,
    name: "Chocolate Mousse",
    category: "dessert",
    description: "Smooth and creamy chocolate mousse with cocoa.",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80",
  },

  // ================= DRINKS =================
  {
    id: 25,
    name: "Fresh Lemonade",
    category: "drinks",
    description: "Refreshing lemonade prepared with fresh lemons.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 26,
    name: "Cold Coffee",
    category: "drinks",
    description: "Chilled creamy coffee topped with chocolate.",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 27,
    name: "Fresh Orange Juice",
    category: "drinks",
    description: "Freshly squeezed orange juice served chilled.",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 28,
    name: "Strawberry Milkshake",
    category: "drinks",
    description: "Creamy strawberry milkshake topped with whipped cream.",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 29,
    name: "Mango Smoothie",
    category: "drinks",
    description: "Fresh mango blended with creamy yogurt and ice.",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 30,
    name: "Mint Mojito",
    category: "drinks",
    description: "Refreshing mint drink with lime and sparkling water.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=80",
  },
];


function Menu() {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  const filteredFoods = foods.filter(
    (food) => food.category === activeCategory
  );

  const handleStartOrder = () => {
    document
      .getElementById("food-items")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="menu-page">
      {/* Menu Heading */}
      <div className="menu-heading">
        <p className="menu-small-title">FOODIE FRENZY</p>

        <h1>
          Discover Our <span>Menu</span>
        </h1>

        <p>
          From delicious breakfast to delightful desserts, discover something
          delicious for every craving.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`menu-category ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span>{category.icon}</span>
            {category.name}
          </button>
        ))}

        <button className="start-order-btn" onClick={handleStartOrder}>
          🛒 Start Order
        </button>
      </div>

      {/* Food Section */}
      <div className="food-section" id="food-items">
        <div className="food-section-heading">
          <h2>
            {categories.find((cat) => cat.id === activeCategory)?.name}
          </h2>

          <p>
            Choose from our delicious{" "}
            {categories
              .find((cat) => cat.id === activeCategory)
              ?.name.toLowerCase()}{" "}
            options
          </p>
        </div>

        <div className="food-grid">
          {filteredFoods.map((food) => (
            <div className="food-card" key={food.id}>
              <div className="food-image">
                <img src={food.image} alt={food.name} />

                <span className="food-badge">Popular</span>
              </div>

              <div className="food-info">
                <h3>{food.name}</h3>

                <p>{food.description}</p>

                <div className="food-footer">
                  <span className="food-price">₹{food.price}</span>

                  <button className="add-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;