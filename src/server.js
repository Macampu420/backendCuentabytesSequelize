import express from 'express';
import sequelize from './conexion.js';

import {schemaImagen, schemaProducto} from './models/index.js';
import routerClientes from './routes/clientes.routes.js';

const port = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', routerClientes);

async function montarServer(){
    try {
        await sequelize.authenticate();
        // await sequelize.sync({force: true});
        app.listen(port, () => console.log(`App running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

montarServer();