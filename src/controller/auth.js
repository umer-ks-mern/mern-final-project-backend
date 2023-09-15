import bcrypt from "bcrypt";
import userModel from "../model/users.js";
import jwt from "jsonwebtoken";


const authController={
login : async (req, res, next) => {
        const { name, email, password } = req.body
        // Check if name and email is provided
        if (!name ||  !email || !password) {
          return res.status(400).json({
            message: "Data Missing!",
          })
        }
        try {
            const user = await userModel.findOne({ name, email });
            const result = await bcrypt.compare(req.body.password, user.password);
            if (!user) {
              res.status(401).json({
                message: "Login not successful",
                error: "Invalid Credentials!",
              })
            }   
            else if(!result){
              res.status(401).json({
                message: "Login not successful",
                error: "Invalid Credentials!",
              })
            }
          
            else {
                  // sign token and send it in response
                  const token = await jwt.sign({ name: user.name,email:user.email,id:user.id },process.env.SECRET_KEY,{
                    algorithm:`${process.env.ALGO}`,
                    expiresIn:"24h"
                  });
                 
            }
        }
           catch (error) {
            res.status(400).json({
              message: "An error occurred",
              error: error.message,
            })
          }          
        }
    
      };    
export default authController;