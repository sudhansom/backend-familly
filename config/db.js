import mongoose from "mongoose";
import chalk from "chalk";

import { dev } from "./index.js";



const connectDB = async ()=>{
    try {
        await mongoose.connect(dev.db.mongoUrl);
        console.log(chalk.whiteBright("Connected to mongoDB..."))
    }
    catch(error){
        console.log(chalk.redBright("Could not connect MongoDB."))
    }
}

export default connectDB;