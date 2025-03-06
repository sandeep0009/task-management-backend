import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";
import { User } from "@prisma/client";

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

export const authFunction = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];

        if (!token) {
            res.status(401).json({ message: "Access Denied. No token provided." });
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET) as User;
        req.user = decoded;

        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token." });
    }
};