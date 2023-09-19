import { Router } from "express";
import { createUser, loginUser } from "../controllers/user.js";

const userRoute = Router();

userRoute.post('/', createUser);
userRoute.post('/login', loginUser);

export default userRoute;