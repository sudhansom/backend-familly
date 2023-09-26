import mongoose, { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    complete: {
        type: Boolean
    }
});

const Todo = model("Todo", todoSchema);
export default Todo;