import bcryptjs from "bcryptjs";
import userModel from "../model/users.js";



const UserController = {
    getAll: async (req, res) => {
        const users = await userModel.find();
        return res.json(users);
      },
    create: async (req, res) => {
     
     try{
        const {name,email,password,adress,phone} = req.body;
        const hashPassword=await bcryptjs.hash(body.password,12);

    const existingUser = userModel.find(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    else {
     const newUser = await userModel.create({
       name: body.name,      
       email: body.email,
       address: body.address,
       phone: body.phone,
       password: hashPassword 
     });
     return res.json({ message: "User Successfully Registered!",newUser})
    }
    }
     catch(error){
         return res.status(500).json({ message: "Something Bad happened!",error});
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
    user.address=body.address;
    user.phone= body.phone;
    await user.save();
    return res.json({ message: "User Updated", user });
  },
};

export default UserController;