import { Router } from "express";
import userRouter from "../api/user/userRoute";
import taskRouter from "../api/tasks/taskRoute";
const router=Router();


router.use(userRouter);
router.use(taskRouter);


export default router;