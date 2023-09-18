import mongoose, { Schema, model } from "mongoose";

const personSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
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
        type: String,
    },
    children: [ {type: mongoose.Types.ObjectId, ref: "Person"}]
})

const Person = model("Person", personSchema);
export default Person;