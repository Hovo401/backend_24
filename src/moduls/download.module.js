import fs from 'fs';
import path from 'path';
import {__publicDirName} from '../utils/utils.js';

const publicPath = path.join(__publicDirName, 'r.jpg');


const download = async()=>{
    const filePath = publicPath;

    // Создаем поток чтения файла
    const fileStream = fs.createReadStream(filePath);
    
    // Устанавливаем заголовки
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="r.jpg"');
    
    // Передаем поток в response
    fileStream.pipe(res);
}

export default download;