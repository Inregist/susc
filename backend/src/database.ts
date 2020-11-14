import { Pool } from 'pg';

const connectionString = process.env.DB_CONNECT || "postgresql://root:root@localhost:5432/susc"

const pool = new Pool({ connectionString })

export const query = (text, params?, callback?) => {
  console.log(pool)
  // return pool.query(text, params, callback)
}