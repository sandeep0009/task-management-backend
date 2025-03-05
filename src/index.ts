import express from "express";
import cors from "cors";
import router from "./router";
import { PORT } from "./config/config";

const app=express();
app.use(express.json());
app.use(cors());

app.use(router);
const port=PORT;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

