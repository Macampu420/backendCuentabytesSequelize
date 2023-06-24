import express from 'express';
import { traerClientes, registrarCliente, actualizarCliente, eliminarCliente, traerCliente } from '../controllers/clientes.controllers.js';

const routerClientes = express.Router();

routerClientes.get('/clientes', traerClientes);
routerClientes.get('/clientes/:id', traerCliente);
routerClientes.post('/clientes', registrarCliente);
routerClientes.put('/clientes/:id', actualizarCliente);
routerClientes.delete('/clientes/:id', eliminarCliente);

export default routerClientes;