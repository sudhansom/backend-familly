import User from "../models/user.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const newUser = new User({
            name,
            password: await bcrypt.hash(password, 10)
        });
        newUser.save();
        return res.status(200).json(newUser);
    }catch(error){
        return next(error);
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({name});
        console.log(password, user.password);
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        console.log(isPasswordMatched);
        return res.status(200).json({success: true, statusCode: 200});
    }catch(error){
        return next(error);
    }
}