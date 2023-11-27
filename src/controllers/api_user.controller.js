import path from 'path';
import _download from "../moduls/download.module.js";
import {__publicDirName} from '../1_libs/utils.js';


class UserController{
    async download(req, res){
        res.download(path.resolve(__publicDirName, 'r.png'));
    }
}

const userController = new UserController();
export default  userController;