import bcryptjs from "bcryptjs";
import userModel from "../model/users.js";
import jwt from "jsonwebtoken";

const userController = {
  getAll: async (req, res) => {
    const users = await userModel.find();
    console.log(users);
    return res.json(users);
  },
  getSingle: async (req, res) => {
    const userId = req.params.id;

    try {
      const user = await userModel.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  },
  create: async (req, res) => {
    try {
      const { name, email, password, address, phone, role } = req.body;
      const hashPassword = await bcryptjs.hash(password, 12);

      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      } else {
        const newUser = await userModel.create({
          name: name,
          email: email,
          address: address,
          phone: phone,
          password: hashPassword,
          role: role,
        });
        const token = jwt.sign({ user: newUser }, process.env.SECRET_KEY, {
          algorithm: process.env.ALGO,
          expiresIn: "24h",
        });
        res.setHeader("Authorization", `Bearer ${token}`);

        return res.json({ message: "User Successfully Registered!", newUser });
      }
    } catch (error) {
      return res.json({ message: error.message,  });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Data Missing!",
      });
    }
    try {
      const user = await userModel.findOne({ email });
      console.log(user);
      const result = await bcryptjs.compare(password, user.password);
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "Invalid Credentials!",
        });
      } else if (!result) {
        res.status(401).json({
          message: "Login not successful",
          error: "Invalid Credentials!",
        });
      } else {
        // sign token and send it in response
        const token = await jwt.sign(
          { name: user.name, email: user.email, id: user.id },
          process.env.SECRET_KEY,
          {
            algorithm: `${process.env.ALGO}`,
            expiresIn: "24h",
          }
        );
        res.setHeader("Authorization", `Bearer ${token}`);
      }
      return res.json(user);
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      });
    }
  },

  update: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = body.name;
    user.email = body.email;
    user.address = body.address;
    user.phone = body.phone;
    await user.save();
    return res.json({ message: "User Updated", user });
  },
};

export default userController;
