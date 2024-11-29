const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  roasted: {
    type: String,
    required: true,
  },
  imagelink_square: {
    type: String,
    required: true,
  },
  imagelink_portrait: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  special_ingredient: {
    type: String,
    required: true,
  },
  prices: [
    {
      size: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
  ],
  average_rating: {
    type: Number,
    required: true,
  },
  ratings_count: {
    type: String,
    required: true,
  },
  favourite: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const Coffee = mongoose.model("Coffee", coffeeSchema);

module.exports = Coffee;
