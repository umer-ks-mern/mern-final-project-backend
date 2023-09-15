import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
  },
  {
    catagory: {
      type: "string",
      required: true,
    },
  },
  {
    price: {
      type: "number",
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0 && Number.isFinite(value);
        },
        message: "Price must be a non-negative number.",
      },
    },
  },
  {
    quantity: {
      type: "number",
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0 && Number.isFinite(value);
        },
        message: "Quantity must be a non-negative number.",
      },
    },
  },
  {
    description: {
      type: "string",
      required: true,
      max: 1000,
    },
  }
);

const productModel = mongoose.model("bills", productSchema);

export default productModel;
