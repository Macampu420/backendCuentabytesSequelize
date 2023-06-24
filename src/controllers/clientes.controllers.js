import schemaCliente from "../models/Clientes.js";

export const traerClientes = function(req, res){
    res.send('hola')
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

        console.log(nuevoCliente);

        res.status(200).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'ocurrió un error al registrar el cliente, por favor intentalo más tarde'});
    }

}

