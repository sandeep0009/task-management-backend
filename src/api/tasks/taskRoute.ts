import { Router } from "express";
import { create, findAll, findById, remove, update } from "./taskController";

const router=Router();

router.post('/create',create);
router.get('/all',findAll);
router.get('/:id',findById);
router.patch('/:id',update);
router.delete('/:id',remove);

export default router;