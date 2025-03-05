import { Request, Response } from "express"
import { queryPool } from "../../db/connection";
import { userQuery } from "./userQuery";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRE, JWT_SECRET } from "../../config/config";




export const signup = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, password } = req.body;
        const userExist = await queryPool.query(userQuery.findUserByEmail, [email]);
        if (userExist.rows.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await queryPool.query(userQuery.insertUser, [{ name, email, password: hashPassword }]);
        return res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        console.log(error);
    }
}

export const signIn = async (req: Request, res: Response): Promise<any> => {

    try {
        const { email, password } = req.body;
        const userExist = await queryPool.query(userQuery.findUserByEmail, [email]);
        if (userExist.rows.length === 0) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const user = userExist.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
        return res.status(200).json({ token });

    } catch (error) {
        console.log(error);

    }
}