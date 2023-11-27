import fs from 'fs';
import path from 'path';
import {__publicDirName} from '../1_libs/utils.js';

const publicPath = path.join(__publicDirName, 'r.jpg');

const download = async(req, res) => {
    const filePath = publicPath;
    console.log(filePath)
    // Check if the file exists
    if (!fs.existsSync(publicPath)) {
        //return res.status(404).send('File not found');
      }
    
    // Create a readable stream
    const fileStream = fs.createReadStream(filePath);

    // Set headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="r.jpg"');

    // Pipe the stream to the response
    fileStream.pipe(res);
}

export default download;