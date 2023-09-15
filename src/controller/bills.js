import billModel from "../model/bills.js";
import userModel from "../model/users.js";
import productModel from "../model/products.js";
import checkoutEmail from "../email/checkout/bill.js";

const billController = {
  generateBill: async (req, res) => {
    try {
      const { user_id, products, secondaryAddress } = req.body;

      let total = 0;
      for (const product of products) {
        const productDoc = await productModel.findById(product.product_id);

        if (productDoc) {
          total += productDoc.price * product.quantity;
        }
      }

      // Get the user's address based on the user_id
      const user = await userModel.findById(user_id);

      // Create a new bill document
      const newBill = new billModel({
        user_id,
        products,
        total,
        address: secondaryAddress ? secondaryAddress : secondaryAddress, // Add user's address to the bill
      });

      const savedBill = await newBill.save();
      checkoutEmail(user.email, savedBill);
      checkoutEmail("admin@tempmail.com", savedBill);

      res.status(201).json(savedBill);
    } catch (error) {
      console.error("Error generating bill:", error);
      res.status(500).json({ error: "Error generating bill" });
    }
  },
};
export default billController;
