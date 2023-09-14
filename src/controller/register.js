import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// This is just a mock user data storage for testing, replace it with your database logic
const mockUsers = [];

const registerController = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if the email already exists in the mock user data (for testing purposes)
      const existingUser = mockUsers.find((user) => user.email === email);

      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      // Hash the provided plain text password
      const hashedPassword = await bcryptjs.hash(password, 10);

      // Create a new user object
      const newUser = {
        email: email,
        password: hashedPassword,
      };

      // In a real application, you would save the new user to your database.
      // For testing, we'll push it to the mockUsers array.
      mockUsers.push(newUser);

      console.log(process.env.JWT_SECRET_KEY);

      // Generate a JWT token for the new user
      const token = jwt.sign({ user: newUser }, process.env.JWT_SECRET_KEY, {
        algorithm: "HS256",
        expiresIn: "24h",
      });
      res.setHeader("Authorization", `Bearer ${token}`);
      return res.json({ message: "Registration Successful !!", token: token });
    } catch (error) {
      console.log(error)
    }
  },
};

export default registerController;
