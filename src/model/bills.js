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
          type: Number,
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
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const billModel = mongoose.model("bills", billSchema);

export default billModel;
