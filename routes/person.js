import { Router } from "express";
import { createPerson, getAllPerson } from "../controllers/person.js";

const personRouter = Router();

personRouter.post('/', createPerson);
personRouter.get('/', getAllPerson);


export default personRouter;