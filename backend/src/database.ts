import { Pool, QueryConfig } from 'pg';

const connectionString = process.env.DATABASE_URL || "postgresql://root:root@localhost:5432/susc"

const pool = new Pool({ connectionString })

export const query = async (param: QueryConfig) => {
  if (!pool) return null
  return await pool.query(param)
}
