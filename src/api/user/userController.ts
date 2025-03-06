import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config";
import { prisma } from "../../helper/prisma";
import { userSignInSchema, userSignUpSchema } from "../../helper/zodVerfication";

export const signup = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, password } = req.body;

        const parseData=await userSignUpSchema.safeParse(req.body);
        if(!parseData.success){
            return res.status(400).json({message:parseData.error});
        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword
            }
        });

        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const signIn = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;
        const parseData=await userSignInSchema.safeParse(req.body);
        if(!parseData.success){
            return res.status(400).json({message:parseData.error});
        }

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
