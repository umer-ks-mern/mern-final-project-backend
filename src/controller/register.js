import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const mockUsers = [];

const registerController = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingUser = mockUsers.find((user) => user.email === email);

      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const hashedPassword = await bcryptjs.hash(password, 10);

      const newUser = {
        email: email,
        password: hashedPassword,
      };

      mockUsers.push(newUser);

      const token = jwt.sign({ user: newUser }, process.env.JWT_SECRET_KEY, {
        algorithm: process.env.ALGO,
        expiresIn: "24h",
      });
      res.setHeader("Authorization", `Bearer ${token}`);
      return res.json({ message: "Registration Successful !!", token: token });
    } catch (error) {
      console.log(error);
    }
  },
};

export default registerController;
