import mysql from 'mysql2';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '../config/config';

export const queryPool=mysql.createPool({
    host:DB_HOST ,
    user:DB_USER ,
    password:DB_PASSWORD,
    database:DB_NAME ,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})