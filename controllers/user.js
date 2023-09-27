import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import HttpError from "../http-error/error.js";
import { dev } from "../config/index.js";

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
        const { userName, password } = req.body;
        const user = await User.findOne({name: userName});
        if(!user){
            return res.status(404).json({message: "User not found."});
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if(!isPasswordMatched){
            return next(new HttpError("password not matched", 404));
        }
       const token = jwt.sign({user}, dev.app.jwtSecretKey, {expiresIn: '1h'} );
        return res.status(200).json({success: true, statusCode: 200, token});
    }catch(error){
        return next(error);
    }
}