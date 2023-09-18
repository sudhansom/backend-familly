import Person from "../models/person.js";

export const createPerson = async (req, res, next) => {
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
        return res.status(201).json({message: "Person created", person: req.body});
    }
    catch(error){
        const err = new Error(error.message, 500);
        return next(err);
    }
}