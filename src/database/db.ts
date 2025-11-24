import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
});


export async function insertUser(name: string, email: string) {
    const query = `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`;
    const values = [name, email];
    const result = await pool.query(query, values);
    return result.rows[0];
}

export async function listUsers() {
 const result = await pool.query(`SELECT * FROM users ORDER BY id`);
    return result.rows;
}


export async function closePool() {
    await pool.end();
}
