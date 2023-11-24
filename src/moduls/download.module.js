import fs from 'fs';
import path from 'path';

const dirname = path.dirname(new URL(import.meta.url).pathname);
const publicPath = path.join(dirname, '..', '..', 'public', 'r.png');


const download = async()=>{
    const filePath = publicPath;

    // Создаем поток чтения файла
    const fileStream = fs.createReadStream(filePath);
    
    // Устанавливаем заголовки
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="r.png"');
    
    // Передаем поток в response
    fileStream.pipe(res);
}
