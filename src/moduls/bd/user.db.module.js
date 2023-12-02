import { query, pool } from './libs/bd.module.js';

async function getProjectsItems(offset = 0, pageSize = 3) {
    try {
        const result = await query(
            `SELECT * FROM projects` +
            ` ORDER BY ID DESC` +
            ` LIMIT $1 OFFSET $2`,
            [pageSize, offset]
        );
       // console.log(result?.rows ?? [])
        return result?.rows ?? [];
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
            return result?.rows[0]?.count ?? [];
        }
        return [];
    } catch (error) {
        console.error('Error executing query: ', error.message);
        return null;
    }
}
export { getProjectsItems, getProjectsItemsCount };