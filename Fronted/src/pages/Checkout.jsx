import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems } = useCart();

  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.food.price * item.quantity,
    0
  );

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/orders/place",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            deliveryAddress: address,
            paymentMethod,
          }),
        }
      );

      const data = await response.json();
      console.log("order API response:", data);

      if (!response.ok) {
        alert(data.message || "Failed to place order");
        return;
      }

      console.log("Order placed:", data);

      alert("Order placed successfully!");

      navigate("/orders");
    } catch (error) {
      console.error("Place order error:", error);
      alert("error.message");
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <h1>Your Cart is Empty</h1>
        <button onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form onSubmit={handlePlaceOrder}>
        <div>
          <label>Delivery Address</label>

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            rows="4"
            required
          />
        </div>

        <div>
          <label>Payment Method</label>

          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="COD">Cash on Delivery</option>
          </select>
        </div>

        <div>
          <h2>Order Summary</h2>

          <p>Items: {cartItems.length}</p>

          <h3>Total: ₹{totalPrice}</h3>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}

export default Checkout;