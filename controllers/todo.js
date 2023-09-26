import Todo from "../models/todo.js";

export const createTodo = async (req, res, next) => {

    const { title, date, description, complete=false} = req.body;

    try {
        const newTodo = await Todo({
            title,
            date,
            description,
            complete
        })

        await newTodo.save();
        return res.json({message: "created todo"})
    }
    catch(error){
        return res.json({message: "error...."})
    }

}

export const getTodos = async (req, res, next)=>{
    try {
        const allTodos = await Todo.find();
        res.status(200).json(allTodos);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}