import express from "express";
import chalk from "chalk";

import connectDB from "./config/db.js";


const app = express();


const port = 3001;


app.listen(port, async () => {
    console.log(chalk.blueBright(`server running at: http://localhost:${port}`));
    await connectDB();
});