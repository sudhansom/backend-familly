import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todo.js";

const todoRoute = Router();

todoRoute.get('/', getTodos);
todoRoute.post('/', createTodo);

export default todoRoute;