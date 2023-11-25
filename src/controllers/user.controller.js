import _download from "../moduls/download.module.js";

class UserController{
    async download(req, res){
        await _download(req, res);
    }
}

const userController = new UserController();
export default  userController;