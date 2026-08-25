// import { useCart } from "../context/CartContext";
// import "./FoodCard.css";
// function FoodCard({ food }) {
//     const {addToCart}= useCart();
//   return (
//     <div className="food-card">
//       <div className="food-image">
//         <img src={food.image} alt={food.name} />
//       </div>

//       <div className="food-info">
//         <div className="food-title-row">
//           <h3>{food.name}</h3>
//           <span>⭐ {food.rating}</span>
//         </div>

//         <p>{food.description}</p>

//         <div className="food-bottom">
//           <strong>₹{food.price}</strong>

//           <button onClick={()=> addToCart(food)}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodCard;

import { useCart } from "../context/CartContext";
import "./FoodCard.css";

function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="food-card">

      <div className="food-image-wrapper">
        <img
          src={food.image}
          alt={food.name}
          className="food-card-image"
        />

        <div className="food-overlay">
          <span className="rating">
            ⭐ {food.rating || "4.5"}
          </span>

          <span className="likes">
            ❤️ {food.likes || "105"}
          </span>
        </div>
      </div>

      <div className="food-info">

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-bottom">

          <strong>₹{food.price}</strong>

          <button onClick={() => addToCart(food)}>
            <span>＋</span> Add
          </button>

        </div>

      </div>
    </div>
  );
}

export default FoodCard;