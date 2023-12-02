import path from 'path';
import fs from 'fs';
import {__downloadsDirName} from '../1_libs/utils.js';
import handleError from '../1_libs/handleError.js';
import {uploadRun} from '../moduls/File.module.js';

class UploadController{
    async upload(req, res){
        try{
            const file = req.file;

            await uploadRun('projects', file );

            res.status(200).json({ message: 'File uploaded successfully' });
            
        }catch(e){
            handleError(e, res);
        }
    }
}

const uploadController = new UploadController();
export default  uploadController;