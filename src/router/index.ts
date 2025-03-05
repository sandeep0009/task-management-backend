import { Router } from "express";
import userRouter from "../api/user/userRoute";

const router=Router();


router.use(userRouter);


export default router;