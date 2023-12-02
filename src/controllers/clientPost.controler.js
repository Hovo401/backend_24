import {__downloadsDirName} from '../1_libs/utils.js';
import {insertMessage} from '../moduls/bd/messages.table.module.js';
import handleError from '../1_libs/handleError.js';

class  ClientPostController{
    async postCreatMessage(req, res){
        try{
            const {communication_method, client_name, phone, message} = req.body;
            const g = await insertMessage({communication_method, client_name, phone, message});
            res.json(g);
        }catch(e){
            handleError(e, res);
        }
    }
}

const clientPostController = new ClientPostController();
export default  clientPostController;