import { Request, Response } from "express";
import { queryPool } from "../../db/connection";
import { taskQuery } from "./taskQuery";


export const create=async(req:Request,res:Response):Promise<any>=>{
    try {
        const {title,description}=req.body
        const newTask=await queryPool.query(taskQuery.createTask,[title,description]);
        return res.status(200).json(newTask);
        
        
    } catch (error) {
        console.log(error)
        
    }
}

export const findAll=async(req:Request,res:Response):Promise<any>=>{
    try {
        const tasks=await queryPool.query(taskQuery.findAll);
        return res.status(200).json(tasks);
        
    } catch (error) {
        console.log(error)
        
    }
}

export const findById=async(req:Request,res:Response):Promise<any>=>{
    try {
        const {id}=req.params
        const task=await queryPool.query(taskQuery.findById,[id]);
        return res.status(200).json(task);
        
    } catch (error) {
        console.log(error)
        
    }

}

export const update=async(req:Request,res:Response):Promise<any>=>{
    try {
        const {id}=req.params
        const {title,description}=req.body
        const task=await queryPool.query(taskQuery.updateTask,[title,description,id]);
        return res.status(200).json(task);
        
    } catch (error) {
        console.log(error)
        
    }

}


export const remove=async(req:Request,res:Response):Promise<any>=>{
    try {
        const {id}=req.params
        const task=await queryPool.query(taskQuery.removeTask,[id]);
        return res.status(200).json(task);
        
    } catch (error) {
        console.log(error)
        
    }

}

