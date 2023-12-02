import path from 'path';
import fs from 'fs';
import {__downloadsDirName} from '../1_libs/utils.js';
import {getProjectsItems, getProjectsItemsCount} from '../moduls/bd/user.db.module.js';

class DownloadController{
    async projectsItems(req, res){
        try{
            const page = req?.query?.page ?? 1,
                pageSize = req?.query?.pageSize ?? 3,
                offset = pageSize * (page - 1);
                
            res.json({
                "items": 
                    await getProjectsItems(offset, pageSize)
                ,  
                "meta": {
                    "totalItems":  await getProjectsItemsCount(),
                    "currentPage": page,
                    "pageSize": pageSize
                }
            });
        }catch(e){
            console.error(e);
            res.status(500).json({ error: `Server error` });
        }
    }
}

const downloadController = new DownloadController();
export default  downloadController;