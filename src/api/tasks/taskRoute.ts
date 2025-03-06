import { Router } from "express";
import { create, findAll, findById, remove, update } from "./taskController";
import { authFunction } from "../../helper/verify";

const router=Router();

router.post('/create',authFunction,create);
router.get('/all',authFunction,findAll);
router.get('/:id',authFunction,findById);
router.put('/:id',authFunction,update);
router.delete('/:id',authFunction,remove);

export default router;