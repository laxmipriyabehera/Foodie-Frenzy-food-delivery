import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.food.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>
        <p>Add some delicious food to your cart.</p>

        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            const food = item.food;

            return (
              <div className="cart-item" key={item._id}>
                <img
                  src={food.image}
                  alt={food.name}
                />

                <div className="cart-item-info">
                  <h3>{food.name}</h3>

                  <p>₹{food.price}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => decreaseQuantity(food._id)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(food._id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-right">
                  <strong>
                    ₹{food.price * item.quantity}
                  </strong>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(food._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button className="checkout-button">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;