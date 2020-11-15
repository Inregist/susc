import { Pool } from 'pg';

const connectionString = process.env.DB_CONNECT || "postgresql://root:root@localhost:5432/susc"

const pool = new Pool({ connectionString })

export const query = async (text, value=[]) => {
  return await pool.query(text,value)
}
