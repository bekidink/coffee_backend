const Coffee = require("../models/Coffee");
const bucket = require("../firebase");
// Get all coffee items
exports.getAllCoffees = async (req, res) => {
  try {
    const { type } = req.query; // Extract 'type' from query parameters

    // If 'type' is provided, filter by type, otherwise fetch all coffees
    const filter = type ? { type } : {};
    const coffees = await Coffee.find(filter);

    if (coffees.length === 0) {
      return res
        .status(404)
        .json({ message: "No coffees found for the specified type" });
    }

    res.status(200).json(coffees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coffees", error });
  }
};

// Get a single coffee item by ID
exports.getCoffeeById = async (req, res) => {
  try {
    const coffee = await Coffee.findOne({ id: req.params.id });
    if (!coffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }
    res.status(200).json(coffee);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coffee", error });
  }
};

// Create a new coffee item
exports.createCoffee = async (req, res) => {
  try {
    const newCoffee = new Coffee(req.body);
    const savedCoffee = await newCoffee.save();
    res.status(201).json(savedCoffee);
  } catch (error) {
    res.status(500).json({ message: "Error creating coffee", error });
  }
};

// Update a coffee item by ID
exports.updateCoffee = async (req, res) => {
  try {
    const updatedCoffee = await Coffee.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedCoffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }
    res.status(200).json(updatedCoffee);
  } catch (error) {
    res.status(500).json({ message: "Error updating coffee", error });
  }
};

// Delete a coffee item by ID
exports.deleteCoffee = async (req, res) => {
  try {
    const deletedCoffee = await Coffee.findOneAndDelete({ id: req.params.id });
    if (!deletedCoffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }
    res.status(200).json({ message: "Coffee deleted", coffee: deletedCoffee });
  } catch (error) {
    res.status(500).json({ message: "Error deleting coffee", error });
  }
};
