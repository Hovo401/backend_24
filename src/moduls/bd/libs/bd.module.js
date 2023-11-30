import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'postgresql',
  password: 'root',
  port: 5432,
});


const query = async (text, params) => {
  const start = Date.now();
  const result = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Executed query', { text, duration, rows: result.rowCount });
  return result;
};


export { query, pool };