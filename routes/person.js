import { Router } from "express";
import { createPerson } from "../controllers/person.js";

const personRouter = Router();

personRouter.post('/', createPerson);


export default personRouter;