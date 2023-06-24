import schemaCliente from "../models/Clientes.js";

export const traerClientes = async function(req, res){

    try {
        const clientes = await schemaCliente.findAll();
    
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({mensaje: error.message});
    }

}

export const registrarCliente = async function(req, res){
    const { documentoCliente, nombresCliente, apellidosCliente, telefonoCliente } = req.body;
    
    try {
        const nuevoCliente = await schemaCliente.create({
            documentoCliente,
            nombresCliente,
            apellidosCliente,
            telefonoCliente
        });

        res.status(200).json(nuevoCliente);
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: error.message});
    }

}

