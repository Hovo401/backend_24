import path from 'path';
import _download from "../moduls/download.module.js";
import {__publicDirName} from '../1_libs/utils.js';


class DownloadController{
    async download(req, res){
        res.download(path.resolve(__publicDirName, 'r.jpg'));
    }
}

const downloadController = new DownloadController();
export default  downloadController;