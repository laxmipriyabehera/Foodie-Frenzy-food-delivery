import { useEffect, useState } from "react";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/orders/my-orders",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log("Fetch orders failed:", data);
        return;
      }

      console.log("My orders:", data);

      setOrders(data.orders || []);
    } catch (error) {
      console.error("Fetch orders error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading Orders...</h1>;
  }

  if (orders.length === 0) {
    return (
      <div>
        <h1>No Orders Yet</h1>
        <p>You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <h3>Order ID: {order._id}</h3>

          <p>
            <strong>Status:</strong><span className="order-status">{order.status}</span>
          </p>

          <p>
            <strong>Delivery Address:</strong>{" "}
            {order.deliveryAddress}
          </p>

          <p>
            <strong>Payment:</strong> {order.paymentMethod}
          </p>

          <div className="order-items">
            {order.items.map((item) => (
              <div className="order-item" key={item._id}>
                <span className="order-item-name">
                  {item.food?.name} × {item.quantity}
                </span>

                <span className="order-item-price">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <h3>Total: ₹{order.totalAmount}</h3>
        </div>
      ))}
    </div>
  );
}

export default Orders;