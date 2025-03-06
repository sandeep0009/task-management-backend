import z from "zod";


export const userSignUpSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
});


export const userSignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(255),
});


export const taskSchema = z.object({
    title: z.string().min(3).max(255),
    status: z.enum(["todo", "in-progress", "done"]),
});


