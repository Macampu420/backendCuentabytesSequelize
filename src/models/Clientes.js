import { DataTypes } from "sequelize";
import sequelize from "../conexion.js";

const schemaCliente = sequelize.define('tbl_cliente', {
    documentoCliente: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    nombresCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidosCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefonoCliente: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default schemaCliente;