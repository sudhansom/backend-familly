import { Schema, model } from "mongoose";

const userSchema = new Schema (
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Name is required"]
        },
    
    },
    {
        timestamps: true,
    }
);

const User = model("User", userSchema);
export default User;