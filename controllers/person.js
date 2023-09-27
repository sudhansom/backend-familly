import Person from "../models/person.js";
import { dev } from "../config/index.js";
import jwt from "jsonwebtoken";

export const createPerson = async (req, res, next) => {
    console.log('create person');
    try {
        const { name, email, dob, description, gender, root=false, phone } = req.body;
        const newPerson = new Person({
            name, 
            email, 
            dob, 
            description, 
            gender, 
            root:false, 
            phone,
            children: [],
        })
        await newPerson.save()
        return res.status(201).json(newPerson);
    }
    catch(error){
        const err = new Error(error.message, 500);
        return next(err);
    }
}

export const getAllPerson = async (req, res, next) => {
    try {
        const allPeople = await Person.find();
        return res.status(200).json(allPeople);
    }
    catch(error){
        return next(error);
    }
}

export const getOnePerson = async ( req, res, next ) => {
    try {
        const id = req.params.id;
        const person = await Person.findById(id);
        return res.status(200).json(person);
    }
    catch(error){
        return next(error);
    }
}

export const updatePerson = async ( req, res, next ) => {
    try {
        const id = req.params.id;
        const person = await Person.findByIdAndUpdate(id, req.body);
        await person.save();
        //const tokenVerified = jwt.verify(req.body.token, 'dev.app.jwtSecretKey');
        return res.status(200).json({...person, token: req.body.token});
    }
    catch(error){
        return next(error);
    }
}

export const deletePerson = async ( req, res, next ) => {
    try {
        const id = req.params.id;
        const person = await Person.findByIdAndDelete(id, req.body);
        return res.status(200).json(person);
    }
    catch(error){
        return next(error);
    }
}