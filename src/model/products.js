import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 0 && Number.isFinite(value);
      },
      message: "Price must be a non-negative number.",
    },
  },
  quantity: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 0 && Number.isFinite(value);
      },
      message: "Quantity must be a non-negative number.",
    },
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
