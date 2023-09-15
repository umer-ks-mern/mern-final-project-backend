import productModel from "../model/products";

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await productModel.find().populate("user_id");
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productModel.findById(id).populate("user_id");
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  create: async (req, res) => {
    try {
      const { name, category, price, quantity, description } = req.body;
      const product = await productModel.create({
        name,
        category,
        price,
        quantity,
        description,
      });

      return res.json({ message: "Product created", product });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productModel.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const { name, category, price, quantity, description } = req.body;
      if (name) {
        product.name = name;
      }
      if (category) {
        product.category = category;
      }
      if (price) {
        product.price = price;
      }
      if (quantity) {
        product.quantity = quantity;
      }
      if (description) {
        product.description = description;
      }
      await product.save();
      return res.json({ message: "Product updated", product });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await productModel.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      await productModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default productController;
