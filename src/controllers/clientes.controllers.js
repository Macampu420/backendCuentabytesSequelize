import schemaCliente from "../models/Clientes.js";

export const traerClientes = async function(req, res) {
    try {
        // Obtener todos los clientes de la base de datos utilizando Sequelize
        const clientes = await schemaCliente.findAll();

        // Devolver una respuesta exitosa con código de estado 200 y los clientes encontrados
        res.status(200).json(clientes);
    } catch (error) {
        // Si ocurre un error durante el proceso, devolver una respuesta con código de estado 500 y el mensaje de error
        res.status(500).json({ mensaje: error.message });
    }
};

export const registrarCliente = async function(req, res) {
    // Extraer los datos del cliente del cuerpo de la solicitud
    const { documentoCliente, nombresCliente, apellidosCliente, telefonoCliente } = req.body;

    try {
        // Crear un nuevo cliente en la base de datos utilizando Sequelize
        const nuevoCliente = await schemaCliente.create({
            documentoCliente,
            nombresCliente,
            apellidosCliente,
            telefonoCliente
        });

        // Devolver una respuesta exitosa con código de estado 200 y el nuevo cliente creado
        res.status(200).json(nuevoCliente);
    } catch (error) {
        console.log(error);
        // Si ocurre un error durante el proceso, devolver una respuesta con código de estado 500 y el mensaje de error
        res.status(500).json({ mensaje: error.message });
    }
};

export const eliminarCliente = async function(req, res) {
    try {
        // Obtener el identificador del cliente de los parámetros de la solicitud
        const documentoCliente = req.params.id;
        
        // Buscar el cliente en la base de datos utilizando el identificador
        const cliente = await schemaCliente.findByPk(documentoCliente);

        // Si el cliente no existe, devolver una respuesta con código de estado 400 y un mensaje de error
        if (cliente === null || cliente === undefined) return res.status(400).json({ mensaje: 'El cliente no existe' });

        // Eliminar el cliente de la base de datos utilizando Sequelize
        await schemaCliente.destroy({
            where: { documentoCliente }
        });

        // Devolver una respuesta exitosa con código de estado 200
        res.status(200).end();
    } catch (error) {
        // Si ocurre un error durante el proceso, devolver una respuesta con código de estado 500 y el mensaje de error
        res.status(500).json({ mensaje: error.message });
    }
};

export const actualizarCliente = async function(req, res) {
    try {
        // Extraer los datos actualizados del cliente del cuerpo de la solicitud
        const { nombresCliente, apellidosCliente, telefonoCliente } = req.body;
        // Obtener el identificador del cliente de los parámetros de la solicitud
        const documentoCliente = req.params.id;

        // Buscar el cliente en la base de datos utilizando el identificador
        const cliente = await schemaCliente.findByPk(documentoCliente);

        // Si el identificador del cliente es nulo o el cliente no existe, devolver una respuesta con código de estado 400 y un mensaje de error
        if (documentoCliente === null || cliente === undefined) return res.status(400).json({ mensaje: 'El cliente no existe' });

        // Actualizar los datos del cliente en la base de datos
        await schemaCliente.update(
            { nombresCliente, apellidosCliente, telefonoCliente },
            { where: { documentoCliente } }
        );

        // Obtener el cliente actualizado de la base de datos
        const clienteActualizado = await schemaCliente.findByPk(documentoCliente);

        // Devolver una respuesta exitosa con código de estado 200 y el cliente actualizado
        res.status(200).json(clienteActualizado);
    } catch (error) {
        console.log(error);
        // Si ocurre un error durante el proceso, devolver una respuesta con código de estado 500 y el mensaje de error
        return res.status(500).json({ mensaje: error.message });
    }
};

export const traerCliente = async function(req, res){

    try {
        const documentoCliente = req.params.id;

        const cliente = await schemaCliente.findByPk(documentoCliente);

        if(cliente === null || cliente === undefined) return res.status(400).json({mensaje: 'El cliente no existe'});

        res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        return res.status(500).json({'mensaje': error.message});
    }

};