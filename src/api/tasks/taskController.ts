import { Request, Response } from "express";
import { prisma } from "../../helper/prisma";
import { taskSchema } from "../../helper/zodVerfication";


export const create=async(req:Request,res:Response):Promise<any>=>{
    try {
        const {title,status}=req.body;
        const parseData=await taskSchema.safeParse(req.body);
        if(!parseData.success){
            return res.status(400).json({message:parseData.error});
        }

        const userId = req.user?.id;
        const newTask=await prisma.task.create({
            data:{
                title,
                status,
                userId:Number(userId)
            }   
        })
        return res.status(200).json(newTask);
        
        
    } catch (error) {
        console.log(error)
        
    }
}

export const findAll=async(req:Request,res:Response):Promise<any>=>{
    try {
        const tasks=await prisma.task.findMany();

        return res.status(200).json(tasks);
        
    } catch (error) {
        console.log(error)
        
    }
}

export const findById=async(req:Request,res:Response):Promise<any>=>{
    try {
        const {id}=req.params
        const task=await prisma.task.findUnique({
            where:{
                id:Number(id)
            }
        })
        return res.status(200).json(task);
        
    } catch (error) {
        console.log(error)
        
    }

}

export const update=async(req:Request,res:Response):Promise<any>=>{
    try {
        const {id}=req.params
        const {title,status}=req.body
        const task=await prisma.task.update({
            where:{
                id:Number(id)
            },
            data:{
                title,
                status
            }

        });
        return res.status(200).json(task);
        
    } catch (error) {
        console.log(error)
        
    }

}


export const remove=async(req:Request,res:Response):Promise<any>=>{
    try {
        const {id}=req.params
        const task=await prisma.task.delete({
            where:{
                id:Number(id)
            }
        });
        return res.status(200).json(task);
        
    } catch (error) {
        console.log(error)
        
    }

}

