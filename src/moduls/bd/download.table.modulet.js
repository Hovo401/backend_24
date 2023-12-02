import { query, pool } from './libs/bd.module.js';

async function addDownloadQuantity() {
  try {
    const result = await query(`INSERT INTO downloads DEFAULT VALUES`);
    console.log(result)
  } catch (error) {
    console.error('Error executing query: ', error.message);
  }
}

async function getDownloadQuantity() {
  try {
    const result = await query(`SELECT date_create FROM downloads`);
    return result?.rows ?? [];
  } catch (error) {
    console.error('Error executing query: ', error.message);
    return null;
  }
}

export { addDownloadQuantity, getDownloadQuantity };