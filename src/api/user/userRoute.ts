import { Router } from "express";
import { signIn, signup } from "./userController";

const router=Router();

router.post('/signup',signup);
router.post('/signin',signIn);

export default router;
