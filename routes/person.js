import { Router } from "express";
import {
  createPerson,
  getAllPerson,
  getOnePerson,
  updatePerson,
  deletePerson,
} from "../controllers/person.js";
import { authenticateUser } from "../validation/auth-user.js";

const personRouter = Router();

personRouter.post("/", createPerson);
personRouter.get("/", getAllPerson);
personRouter.get("/:id", getOnePerson);
personRouter.put("/:id", updatePerson);
personRouter.delete("/:id", deletePerson);

export default personRouter;
