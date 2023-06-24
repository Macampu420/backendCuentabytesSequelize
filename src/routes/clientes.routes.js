import express from 'express';
import { traerClientes, registrarCliente } from '../controllers/clientes.controllers.js';

const routerClientes = express.Router();

routerClientes.get('/clientes', traerClientes);
routerClientes.post('/clientes', registrarCliente);
routerClientes.put('/clientes/:id');
routerClientes.delete('/clientes/:id');
routerClientes.post('/clientes/:id');

export default routerClientes;