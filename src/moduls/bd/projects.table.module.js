import { query, pool } from './libs/bd.module.js';
import { tableSelect } from './libs/TableBD.class.module.js';

async function getProjectsItems(offset = 0, pageSize = 3) {
    try {
        return tableSelect({offset, pageSize}, 'projects');
    } catch (error) {
        console.error('Error executing query: ', error.message);
        return null;
    }
}

async function getProjectsItemsCount() {
    try {
        const result = await query(
            `SELECT COUNT(*) FROM projects`
        );
        if(result?.rows[0]?.count){
            return result.rows[0].count;
        }
        return null;
    } catch (error) {
        console.error('Error executing query: ', error.message);
        return null;
    }
}



export { getProjectsItems, getProjectsItemsCount };