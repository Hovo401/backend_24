import express from 'express';
import dotenv from "dotenv";
import api_user_routes from './routes/api.user.routes.js';
import api_admin_routes from './routes/api.user.routes.js';
import user_download_router from './routes/user.download.routes.js';
import headerMiddleware from './middlewares/header.middleware.js';
import { __publicDirName } from './1_libs/utils.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(headerMiddleware);
//app.use(express.json());
app.use('/public', express.static(__publicDirName));
app.use('/api', api_user_routes);
app.use('/download', user_download_router);
app.use('/api/admin', api_admin_routes);

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({ error: `Server error` });
});

try {
    app.listen(PORT, () => {
        console.log(`Backend server started on port ${PORT}`)
    })
} catch (e) {
    console.error(e);
}