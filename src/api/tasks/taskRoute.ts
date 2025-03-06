import express from "express";
import { create, findAll, findById, update, remove } from "./taskController";
import { authFunction } from "../../helper/verify";

const router = express.Router();

router.post("/tasks", authFunction, create);
router.get("/tasks", authFunction, findAll);
router.get("/tasks/:id", authFunction, findById);
router.put("/tasks/:id", authFunction, update);
router.delete("/tasks/:id", authFunction, remove);

export default router;