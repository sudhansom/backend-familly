import mongoose, { Schema, model } from "mongoose";

const personSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        email: true,
        trim: true,
    },
    description: {
        type: String,
    },
    gender: {
        type: String,
        required: [true, "gender is required."]
    },
    phone: {
        type: String,
    },
    root: {
        type: String,
        default: false,
    },
    dob: {
        type: Date,
    },
    children: [ {type: mongoose.Types.ObjectId, ref: "Person"}]
})

const Person = model("Person", personSchema);
export default Person;