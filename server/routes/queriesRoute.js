import express from "express";
import { queriesPostController } from "../controllers/queriesController.js";

const queriesRouter = express.Router();

queriesRouter.post("/queriesPost", queriesPostController);

export default queriesRouter;
