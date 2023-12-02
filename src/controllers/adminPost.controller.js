import dotenv from "dotenv";
import {__downloadsDirName} from '../1_libs/utils.js';
import {insertMessage, insertApplication, getProjectsItems, getProjectsItemsCount} from '../moduls/bd/client.table.module.js';
import handleError from '../1_libs/handleError.js';
import Token from '../moduls/jwt.token.modul.js';

dotenv.config();

class  AdminPostController{
    async creatTokin(req, res){
        try{
            const {login, password} = req.body;

            if(login === process.env.ADMIN_LOGIN && process.env.ADMIN_PASSWORD === password){
                const tokin = await Token.creatToken();
                res.cookie('Authorization', tokin, { httpOnly: true });
                res.json({tokin: tokin});
            }else{
                res.status(401).json({ error: 'Incorrect login or password' });
            }

        }catch(e){
            handleError(e, res);
        }
    }
}

const adminPostController = new AdminPostController();
export default  adminPostController;