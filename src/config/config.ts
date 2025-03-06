
import dotenv from "dotenv";
dotenv.config();
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET || "12345adjva";
export const JWT_EXPIRE = process.env.JWT_EXPIRE || "1d";
