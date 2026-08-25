import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    const response = await fetch(
      "http://localhost:5000/api/cart",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Fetch cart failed:", data);
      return;
    }

    setCartItems(data.cart?.items || []);
  } catch (error) {
    console.error("Fetch cart error:", error);
  }
};

useEffect(() => {
  fetchCart();
   }, []);


  const addToCart = async (food) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    const response = await fetch(
      "http://localhost:5000/api/cart/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          foodId: food._id || food.id,
          quantity: 1,
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
    console.log("Backend response:", data);
    alert(data.message || "Failed to add food");
    return;
    }

    console.log("Food added to cart:", data);

    setCartItems(data.cart.items);
  } catch (error) {
    console.error("Add to cart error:", error);
  }
};

  const removeFromCart = async (foodId) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    const response = await fetch(
      `http://localhost:5000/api/cart/remove/${foodId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Remove from cart failed:", data);
      return;
    }

    console.log("Food removed from cart:", data);

    setCartItems(data.cart.items);
  } catch (error) {
    console.error("Remove from cart error:", error);
  }
};

  const increaseQuantity = async (foodId) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/api/cart/update",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          foodId,
          quantity:
            cartItems.find((item) => item.food._id === foodId)?.quantity + 1,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Increase quantity failed:", data);
      return;
    }

    setCartItems(data.cart.items);
  } catch (error) {
    console.error("Increase quantity error:", error);
  }
};
  
const decreaseQuantity = async (foodId) => {
  try {
    const token = localStorage.getItem("token");

    const currentItem = cartItems.find(
      (item) => item.food._id === foodId
    );

    if (!currentItem) {
      return;
    }

    const newQuantity = currentItem.quantity - 1;

    // Quantity 0 hone par backend se item remove karenge
    if (newQuantity <= 0) {
      await removeFromCart(foodId);
      return;
    }

    const response = await fetch(
      "http://localhost:5000/api/cart/update",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          foodId,
          quantity: newQuantity,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Decrease quantity failed:", data);
      return;
    }

    setCartItems(data.cart.items);
  } catch (error) {
    console.error("Decrease quantity error:", error);
  }
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        fetchCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}