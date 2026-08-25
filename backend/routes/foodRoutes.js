import express from "express";
import Food from "../models/Food.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// POST - Add new food
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
  try {
    const food = new Food(req.body);

    const savedFood = await food.save();

    res.status(201).json({
      message: "Food added successfully",
      food: savedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add food",
      error: error.message,
    });
  }
});

// GET - Get all foods
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch foods",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch food",
      error: error.message,
    });
  }
});

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.status(200).json({
      message: "Food updated successfully",
      food: updatedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update food",
      error: error.message,
    });
  }
});

// DELETE - Delete food
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);

    if (!deletedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.status(200).json({
      message: "Food deleted successfully",
      food: deletedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete food",
      error: error.message,
    });
  }
});
export default router;