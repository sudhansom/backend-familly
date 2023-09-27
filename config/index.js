import dotenv from "dotenv";

dotenv.config();

export const dev = {
    app: {
        port: process.env.PORT,
        jwtSecretKey: process.env.JWT_SECRET_KEY,
    },
    db: {
        mongoUrl: process.env.MONGO_URL,
    }
}