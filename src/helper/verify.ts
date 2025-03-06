import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

interface AuthRequest extends Request {
    user?: any;
}

export const authFunction = (req: AuthRequest, res: Response, next: NextFunction): void => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];

        if (!token) {
            res.status(401).json({ message: "Access Denied. No token provided." });
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token." });
    }
};
