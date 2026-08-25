import express from "express";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// Place Order
router.post("/place", authMiddleware, async (req, res) => {
  try {
    const { deliveryAddress, paymentMethod = "COD" } = req.body;

    if (!deliveryAddress) {
      return res.status(400).json({
        message: "Delivery address is required",
      });
    }

    const cart = await Cart.findOne({
      user: req.user.userId,
    }).populate("items.food");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const orderItems = cart.items.map((item) => ({
      food: item.food._id,
      quantity: item.quantity,
      price: item.food.price,
    }));

    const totalAmount = orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const order = new Order({
      user: req.user.userId,
      items: orderItems,
      totalAmount,
      deliveryAddress,
      paymentMethod,
    });

    const savedOrder = await order.save();

    cart.items = [];
    await cart.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: savedOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to place order",
      error: error.message,
    });
  }
});

// Get My Orders
router.get("/my-orders", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.userId,
    })
      .populate("items.food")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Orders fetched successfully",
      orders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
});

// Admin - Get all orders
router.get(
  "/admin/all",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const orders = await Order.find()
        .populate("user", "name email role")
        .populate("items.food")
        .sort({ createdAt: -1 });

      res.status(200).json({
        message: "All orders fetched successfully",
        orders,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch all orders",
        error: error.message,
      });
    }
  }
);

// Admin - Update order status
router.put(
  "/admin/update-status/:orderId",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const { status } = req.body;
      const { orderId } = req.params;

      const allowedStatuses = [
        "Pending",
        "Confirmed",
        "Preparing",
        "Out for Delivery",
        "Delivered",
        "Cancelled",
      ];

      if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
          message: "Invalid order status",
        });
      }

      const order = await Order.findById(orderId);

      if (!order) {
        return res.status(404).json({
          message: "Order not found",
        });
      }

      order.status = status;

      await order.save();

      const updatedOrder = await Order.findById(orderId)
        .populate("user", "name email role")
        .populate("items.food");

      res.status(200).json({
        message: "Order status updated successfully",
        order: updatedOrder,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to update order status",
        error: error.message,
      });
    }
  }
);

export default router;