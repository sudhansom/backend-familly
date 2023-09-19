import express from "express";
import chalk from "chalk";
import cors from "cors";

import connectDB from "./config/db.js";
import { dev } from "./config/index.js";
import personRouter from "./routes/person.js";
import userRoute from "./routes/user.js";


const app = express();

const port = dev.app.port || 3003;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/persons", personRouter);
app.use("/api/user", userRoute);


app.use(( req, res, next) => {
    return res.status(404).json({
        success: false,
        message: "Not Found",
    })
})

app.use((error, req, res, next) => {
    return res.status(500).json({
        success: false,
        message: error.message,
    })
})




app.listen(port, async () => {
    console.log(chalk.blueBright(`server running at: http://localhost:${port}`));
    await connectDB();
});