import express from 'express';
import path from 'path';
import dotenv from "dotenv";
import api_user_routes from './routes/api.user.routes.js';
import api_admin_routes from './routes/api.user.routes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const dirname = path.dirname(new URL(import.meta.url).pathname);
const publicPath = path.join(dirname, '..', 'public');

app.use('/api', api_user_routes);
app.use('/api/admin', api_admin_routes);
app.use('/public',express.static(publicPath));



try{
    app.listen(PORT,()=>{
        console.log(`Backend server started on port ${PORT}`)
    })
}catch(e){
    console.error(e);
}