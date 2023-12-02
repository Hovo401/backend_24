import {__downloadsDirName} from '../1_libs/utils.js';
import {getProjectsItems, getProjectsItemsCount} from '../moduls/bd/projects.table.module.js';
import handleError from '../1_libs/handleError.js';

class UserController{
    async getprojectsItems_(req, res){
        try{
            const page = req?.query?.page ?? 1,
                pageSize = req?.query?.pageSize ?? 3,
                offset = pageSize * (page - 1);

            res.json({
                "items": 
                    await getProjectsItems(offset, pageSize)
                ,
                "meta": {
                    "totalItems": await getProjectsItemsCount(),
                    "currentPage": page,
                    "pageSize": pageSize
                }
            });
        }catch(e){
            handleError(e, res);
        }
    }
    async getServices_pricesItems_(req, res){
        try{
            const page = req?.query?.page ?? 1,
                pageSize = req?.query?.pageSize ?? 3,
                offset = pageSize * (page - 1);

            res.json({
                "items": 
                    await getProjectsItems(offset, pageSize)
                ,
                "meta": {
                    "totalItems": await getProjectsItemsCount(),
                    "currentPage": page,
                    "pageSize": pageSize
                }
            });
        }catch(e){
            handleError(e, res);
        }
    }
}

const userController = new UserController();
export default  userController;