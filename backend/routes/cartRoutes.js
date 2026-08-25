import express from "express";
import Cart from "../models/Cart.js";
import Food from "../models/Food.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Add food to cart
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { foodId, quantity = 1 } = req.body;

    if (!foodId) {
      return res.status(400).json({
        message: "Food ID is required",
      });
    }

    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    let cart = await Cart.findOne({
      user: req.user.userId,
    });

    if (!cart) {
      cart = new Cart({
        user: req.user.userId,
        items: [
          {
            food: foodId,
            quantity,
          },
        ],
      });

      await cart.save();

      return res.status(201).json({
        message: "Food added to cart successfully",
        cart,
      });
    }

    const existingItem = cart.items.find(
      (item) => item.food.toString() === foodId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        food: foodId,
        quantity,
      });
    }

    await cart.save();

    res.status(200).json({
      message: "Food added to cart successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add food to cart",
      error: error.message,
    });
  }
});

// Get cart
router.get("/", authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.userId,
    }).populate("items.food");

    if (!cart) {
      return res.status(200).json({
        message: "Cart is empty",
        cart: {
          items: [],
        },
      });
    }

    res.status(200).json({
      message: "Cart fetched successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch cart",
      error: error.message,
    });
  }
});

// Update cart quantity
router.put("/update", authMiddleware, async (req, res) => {
  try {
    const { foodId, quantity } = req.body;

    if (!foodId || !quantity || quantity < 1) {
      return res.status(400).json({
        message: "Food ID and valid quantity are required",
      });
    }

    const cart = await Cart.findOne({
      user: req.user.userId,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) => item.food.toString() === foodId
    );

    if (!item) {
      return res.status(404).json({
        message: "Food not found in cart",
      });
    }

    item.quantity = quantity;

    await cart.save();

    const updatedCart = await Cart.findOne({
      user: req.user.userId,
    }).populate("items.food");

    res.status(200).json({
      message: "Cart updated successfully",
      cart: updatedCart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update cart",
      error: error.message,
    });
  }
});

// Remove food from cart
router.delete("/remove/:foodId", authMiddleware, async (req, res) => {
  try {
    const { foodId } = req.params;

    const cart = await Cart.findOne({
      user: req.user.userId,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const itemExists = cart.items.some(
      (item) => item.food.toString() === foodId
    );

    if (!itemExists) {
      return res.status(404).json({
        message: "Food not found in cart",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.food.toString() !== foodId
    );

    await cart.save();

    const updatedCart = await Cart.findOne({
      user: req.user.userId,
    }).populate("items.food");

    res.status(200).json({
      message: "Food removed from cart successfully",
      cart: updatedCart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove food from cart",
      error: error.message,
    });
  }
});

export default router;