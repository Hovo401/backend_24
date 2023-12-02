import { query, pool } from './libs/bd.module.js';
import { tableSelect, tableInsert } from './libs/TableBD.class.module.js';

async function insertMessage({communication_method, client_name, phone, message}) {
    return tableInsert({communication_method, client_name, phone, message}, 'messages');
}



export { insertMessage };