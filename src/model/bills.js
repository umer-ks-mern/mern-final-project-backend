import mongoose, { Schema } from "mongoose";

const billSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    products: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
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
    ],
    address: {
      type: "string",
      required: true,
    },
    total: {
      type: "number",
      required: true,
    },
  },
  { timestamps: true }
);

const billModel = mongoose.model("bill", billSchema);

export default billModel;
