const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffeeController");

// Routes
router.get("/", coffeeController.getAllCoffees); // Get all coffee items
router.get("/:id", coffeeController.getCoffeeById); // Get a single coffee item by ID
router.post("/", coffeeController.createCoffee); // Add a new coffee item
router.put("/:id", coffeeController.updateCoffee); // Update a coffee item by ID
router.delete("/:id", coffeeController.deleteCoffee); // Delete a coffee item by ID

module.exports = router;
